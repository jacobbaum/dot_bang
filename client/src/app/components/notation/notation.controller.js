'use strict';

angular.module('dotBang')
  .controller('NotationCtrl', ['$scope', '$rootScope', '$timeout', 'NotationService', '$mdDialog', function($scope, $rootScope, $timeout, NotationService, $mdDialog) {

    function getNotations(){
      return NotationService.getNotations()
      .success(function(data) {
        $scope.allNotations = data;
        console.log($scope.allNotations); // This logs an array of objects
      })
      .error(function() {
        alert('GET: error');
      });
    }

    // $scope.allNotations = [];

    // console.log($scope.allNotations); 

    getNotations();

    $timeout(function(){
      console.log($scope.allNotations);
    }, 2000);

    console.log($scope.allNotations); // This logs undefined


    // tests to see if either 'number' undefined
    // $scope.number = 'one';
    // function anotherNumber(){
    //   $scope.anotherNumber = 'two';
    // }
    // anotherNumber();
    // console.log($scope.number);
    // console.log($scope.anotherNumber);



    // console.log(getNotations());

    // console.log();

    // load default notation
    // var defaultNotation = 
    //   _.filter($scope.allNotations, function(notation){
    //     return notation.name === 'Demo';
    //   });

    // console.log(defaultNotation);

    $scope.getNotation = function(notation){
      console.log(notation);
      NotationService.getNotation(notation);

      // .success(function(data){
      //   $scope.notation = data;
      //   console.log(JSON.stringify($scope.notation));
      // })
      // .error(function(){
      //   console.log('ha ha ha.');
      // })
      // .then(function(){
      //   console.log($scope.notation.name);
      // });
    };

    $rootScope.$on('notation loaded', function () {
      $scope.notation = NotationService.notation;
    });


    $scope.saveAs = function($event){
      $mdDialog.show({
        controller: 'NotationCtrl',
        templateUrl: '/app/components/notation/dialog.notation.html',
        targetEvent: $event,
        locals: $scope.notation.name,
        // clickOutsideToClose: true  
      })
      .then(function(name) {
        $scope.notation.name = name;
        NotationService.addNotation($scope.notation);
      }, function() {
      // $scope.alert = 'You cancelled the dialog.';
      });
    }

    $scope.cancelSave = function() {
      $mdDialog.cancel();
    };

    $scope.confirmSave = function(name) {
      // console.log($scope.notation.name);
      $mdDialog.hide($scope.notation.name);
    };

    $scope.save = function(){
      NotationService.updateNotation($scope.notation);
    }

    $scope.addNotation = function(){
      console.log($scope.newNotation);
    }

    // $scope.addGroup = function() {
    //   var newGroup = { name: $scope.newGroupName };
    //   GroupService.addGroup(newGroup)
    //   .success(function() {
    //     $scope.newGroupName = null;
    //     getGroups();
    //   })
    //   .error(function(data, status) {
    //     console.log(data);
    //     alert('SAVE ERROR: ' + status + ' : ' + JSON.stringify(data));
    //   });
    // };

    // $scope.notation = 
    //   NotationService.getNotation(defaultNotation[0]);  

    // $scope.notation = NotationService.notation;

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

  }]);
