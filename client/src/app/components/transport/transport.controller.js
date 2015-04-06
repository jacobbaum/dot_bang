'use strict';

angular.module('dotBang')
  .controller('TransportCtrl', ['$scope', '$rootScope', 'NotationService', function ($scope, $rootScope, NotationService) {

    Tone.Transport.loop = true;
    Tone.Transport.loopStart = '0:0:0';
    Tone.Transport.loopEnd = '2:0:0'; // Tone converts this into a number (seconds) based on the current bpm
                                      // Tone recalculates loopEnd when the bpm changes, but does not recalculate when the 
                                      // time signature changes.

    // Initializing for now.  Load from db?  Save with 'score' and load all from notation service?
    // if time signature changes are destructive, it doesn't hurt to save time sign with notation.
    $scope.bpm = 120;
    $scope.position = Tone.Transport.position;
    $scope.timeSignature = Tone.Transport.timeSignature;

    $rootScope.$on('notation loaded', function () {
      $scope.bpm = NotationService.notation.bpm;
      $scope.timeSignature = NotationService.notation['time_signature'];
      Tone.Transport.timeSignature = $scope.timeSignature;
      Tone.Transport.bpm.value = $scope.bpm;
      Tone.Transport.loopEnd = '2:0:0';
    });

    $scope.timeSignatures = [
      { 'display': '4/4', 'value': 4 },
      { 'display': '3/4', 'value': 3 },
      { 'display': '5/4', 'value': 5 },
      { 'display': '6/4', 'value': 6 },
      { 'display': '7/4', 'value': 7 }
    ];

    $scope.setBpm = function(){
      Tone.Transport.bpm.value = $scope.bpm;
    };

    function resetTransport(){
      // Tone.Transport.stop();
      Tone.Transport.position = '0:0:0';
      $scope.position = Tone.Transport.position;
    }

    function reInitLoopEnd(){
      Tone.Transport.loopEnd = '2:0:0';
    }


    // emit message here for notation controller?
    $scope.setTimeSignature = function(){
      resetTransport();
      NotationService.changeTimeSignature($scope.timeSignature);
      reInitLoopEnd();
    };

    Tone.Transport.setInterval(function(){
      $scope.$apply(function() {
        $scope.position = Tone.Transport.position;
      });
    }, '16n'); 

    $scope.play = function(time){
      Tone.Transport.start(time);
      getState(Tone.Transport.state);
    };

    $scope.pause = function(time){
      Tone.Transport.pause(time);
      getState(Tone.Transport.state);
    };

    function getState(transportState) {
      $scope.transportState = transportState;
      console.log($scope.transportState);
      $scope.position = Tone.Transport.position;
    }

    // Doesn't work as expected. 'state' doesn't change on first click.
    // 'position' does not reset.

    $scope.stop = function(time){
      Tone.Transport.stop(time);
      Tone.Transport.position = '0:0:0';
      getState(Tone.Transport.state);
    };

    $scope.back = function(){
      Tone.Transport.position = '0:0:0';
      if (Tone.Transport.state === 'paused') {
        $scope.position = Tone.Transport.position;
      }
    };

}]);
