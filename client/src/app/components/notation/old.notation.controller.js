// 'use strict';

// angular.module('dotBang')
//   .controller('NotationCtrl', function ($scope, $timeout, $window) {

//     var Tone = $window.Tone;
//     var _ = $window._;

//     Tone.Transport.setInterval(function(){
//       $scope.$emit('0:0:0');
//       console.log(Tone.Transport.position);
//     }, '1m');

//     $scope.$on('0:0:0', function(){
//       console.log('okay');
//     });

//     // likely JSON
//     var kitOneFromDb = {'name': 'basic', 'samples': [
//       {'name': 'kick', 'url': '/app/audio/kick.wav'},
//       {'name': 'snare', 'url': '/app/audio/snare.wav'}]};

//     // conversion for tone -
//     var forMerge =
//     _.map(kitOneFromDb.samples, function(sample){
//       var object = {};
//       object[sample.name] = sample.url;
//       return object;
//     });

//     var dotKit = {};
//     _.forEach(forMerge, function(mergie){
//       _.merge(dotKit, mergie);
//     });
      
//     var dotSampler = new Tone.PolySynth(2, Tone.Sampler, dotKit).toMaster();

//     // array of drum names
//     var drumNames =
//     _.map(kitOneFromDb.samples, function(sample){
//       return sample.name;
//     });

//     // // set manually as example
//     // Tone.Transport.setTimeline(function(time){
//     //   dotSampler.triggerAttack(drumNames[0], time);
//     // }, '0:0:0');

//     // Tone.Transport.setTimeline(function(time){
//     //   dotSampler.triggerAttack(drumNames[1], time);
//     // }, '0:0:2');

//     Tone.Transport.clearTimelines();

//     $scope.score = 
//       {'voices': [
//         {'name':'kick', 'notation': [
//           {'time':'0:0:0', 'note':'.', 'tId':''},{'time':'0:0:1', 'note':' ', 'tId':''},
//           {'time':'0:0:2', 'note':' ', 'tId':''},{'time':'0:0:3', 'note':' ', 'tId':''},
//           {'time':'0:1:0', 'note':'.', 'tId':''},{'time':'0:1:1', 'note':' ', 'tId':''},
//           {'time':'0:1:2', 'note':' ', 'tId':''},{'time':'0:1:3', 'note':' ', 'tId':''},
//           {'time':'0:2:0', 'note':'.', 'tId':''},{'time':'0:2:1', 'note':' ', 'tId':''},
//           {'time':'0:2:2', 'note':' ', 'tId':''},{'time':'0:2:3', 'note':' ', 'tId':''},
//           {'time':'0:3:0', 'note':'.', 'tId':''},{'time':'0:3:1', 'note':' ', 'tId':''},
//           {'time':'0:3:2', 'note':' ', 'tId':''},{'time':'0:3:3', 'note':' ', 'tId':''}]
//         },
//         {'name':'snare', 'notation': [
//           {'time':'0:0:0', 'note':'.', 'tId':''},{'time':'0:0:1', 'note':' ', 'tId':''},
//           {'time':'0:0:2', 'note':'.', 'tId':''},{'time':'0:0:3', 'note':' ', 'tId':''},
//           {'time':'0:1:0', 'note':' ', 'tId':''},{'time':'0:1:1', 'note':' ', 'tId':''},
//           {'time':'0:1:2', 'note':'!', 'tId':''},{'time':'0:1:3', 'note':' ', 'tId':''},
//           {'time':'0:2:0', 'note':' ', 'tId':''},{'time':'0:2:1', 'note':' ', 'tId':''},
//           {'time':'0:2:2', 'note':'.', 'tId':''},{'time':'0:2:3', 'note':' ', 'tId':''},
//           {'time':'0:3:0', 'note':' ', 'tId':''},{'time':'0:3:1', 'note':' ', 'tId':''},
//           {'time':'0:3:2', 'note':'.', 'tId':''},{'time':'0:3:3', 'note':' ', 'tId':''}]
//         }]
//       };
    
//     _.forEach($scope.score.voices, function(voice, voiceIndex){
//       _.forEach(voice.notation, function(note){
//         if (note.note === '.') {
//           // console.log(voiceIndex);
//           note.tId =
//           Tone.Transport.setTimeline(function(time){
//             dotSampler.triggerAttack(drumNames[voiceIndex], time);
//           }, note.time);
//           console.log(JSON.stringify(note));
//         } else if (note.note === '!') {
//           note.tId =
//           Tone.Transport.setTimeline(function(time){
//             dotSampler.triggerAttack(drumNames[voiceIndex], time);
//           }, note.time);
//           console.log(JSON.stringify(note));
//         }
//       });
//     });
    

//     // _.forEach($scope.notation.score, function(voice){
//     //   _.map(voice.notes, function(note, noteIndex){

//     //     var sixteenthNote = noteIndex % 4;
//     //     var quarterNote = Math.floor(noteIndex / 4);
//     //     var measure = Math.floor(noteIndex / 16);
//     //     var sample = voice.sampleName;
//     //     var position = measure + ':' + quarterNote + ':' + sixteenthNote;

//     //     if (note !== ' ') {
//     //       Tone.Transport.setTimeline(function(time){
//     //         sampler.triggerAttack(sample, time);
//     //       }, position);

//     //       // console.log(voice.sampleName);
//     //       // console.log(sample);
//     //       // console.log('0:' + quarterNote + ':' + sixteenNote + ' - ' + note);
//     //       // console.log(position);
//     //     }
//     //   });
//     // });

//     // // update $scope.notation with new note value.
//     // // add or remove event from Tone timeline.

//     $scope.cycleNotes = function(note, voiceIndex){
//       var noteValues = [' ', '.', '!'];
//       var i = noteValues.indexOf(note.note);
//       i += 1;
//       if (i === noteValues.length) {
//         i = 0;
//       }
//       note.note = noteValues[i];
//       var noteListener =
//       $scope.$on('0:0:0', function(newValue, oldValue){
//         updateNote(note, voiceIndex); 
//       });

//       // noteListener();
//       // $timeout( function(){ updateNote(note, voiceIndex); }, 500);
    
//     };

// // app.controller('ParentCtrl',
// //   function ParentCtrl ($scope) {

// //   // subscribes...
// //   var myListener = $scope.$on('child', function (event, data) {
// //     // do something
// //   });

// //   // unsubscribes...
// //   // this would probably sit in a callback or something
// //   myListener();

// // });

//     function updateNote(note, voiceIndex) {
//       var noteChange = updateTimeline(note, voiceIndex);
//       if (noteChange === 'deleted note') {
//         note.tId = '';
//       } else {
//         note.tId = noteChange;
//       }
//       console.log(noteChange);
//       console.log(JSON.stringify(note) + ' : ' + drumNames[voiceIndex]);
//     }

//     //update the Tone timeline using updated $scope.note.note
//     function updateTimeline(note, voiceIndex){
//       if (note.tId !== '') {
//         Tone.Transport.clearTimeline(note.tId);
//         console.log('cleared tId: ' + note.tId);
//       } 
//       if (note.note === '.') {
//         var tId =
//         Tone.Transport.setTimeline(function(time){
//           dotSampler.triggerAttack(drumNames[voiceIndex], time);
//         }, note.time);
//         // console.log(JSON.stringify(note));        
//         return tId;
//       } else if (note.note === '!') {
//         var tId =
//         Tone.Transport.setTimeline(function(time){
//           dotSampler.triggerAttack(drumNames[voiceIndex], time);
//         }, note.time);
//         // dotSampler.triggerAttack(drumNames[voiceIndex]);
//         // console.log(JSON.stringify(note));
//         return tId;
//       } else if (note.note === ' ') {
//         Tone.Transport.clearTimeline(note.tId);
//         // console.log(JSON.stringify(note)); 
//         return 'deleted note';       
//       }
//     }
//   });
