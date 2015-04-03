'use strict';

angular.module('dotBang')
  .controller('NotationCtrl', function ($scope, $timeout, $window, NotationService) {

    var Tone = $window.Tone;
    var _ = $window._;


    // when notation is loaded
    $scope.notation = NotationService.notation;



    $scope.clearNotes = function(){
      _.forEach($scope.notation.channels, function(channel) {
        _.forEach(channel.notes, function(note){
          note.value = ' ';
        });
      });
    };

    $scope.cycleNotes = function(note){
      var noteValues = [' ', '.', '!'];
      var i = noteValues.indexOf(note.value);
      i ++;
      if (i === noteValues.length) {
        i = 0;
      }
      note.value = noteValues[i];
      // console.log(note);
      };

    $scope.beatBoundary = function(noteIndex){
      return (noteIndex + 1) % 4 === 0;
    };
  
    // // Tone docs example
    // //setup a polyphonic sampler
    // var keys = new Tone.PolySynth(4, Tone.Sampler, {
    //   "A" : "./audio/casio/A1.mp3",
    //   "C#" : "./audio/casio/Cs2.mp3",
    //   "E" : "./audio/casio/E2.mp3",
    //   "F#" : "./audio/casio/Fs2.mp3",
    // }, {
    //   "envelope" : {
    //     "release" : 0.2
    //   }
    // }).toMaster();
    // keys.volume.value = -15;

    // path to a note: notation.channels[0].notes[0].note
    // notation.channels[x].notes[y].note
    // x - row number. corresponds to channel.
    // y - column number. corresponds to stepNumber


    // $scope.noteOn = function(note){
    //   return note.value !== ' ' && noteIndex = stepNumber;
    // };


    var channelCount = NotationService.channelCount;
    var stepNumber = 0;

    Tone.Transport.setInterval(function(time){
      $scope.noteOn = function(note, noteIndex){
       return note.value !== ' ' && noteIndex === stepNumber;
      };
      stepNumber++;
      stepNumber = stepNumber % (8 * Tone.Transport.timeSignature);
    }, '16n');

  });
