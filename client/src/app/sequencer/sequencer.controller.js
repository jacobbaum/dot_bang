'use strict';

angular.module('dotBang')
  .controller('SequencerCtrl', ['$scope', '$rootScope', 'NotationService', 'SampleService', 'AuthService', function ($scope, $rootScope, NotationService, SampleService, AuthService) {

  AuthService.getSession().success(function(user) {
    $scope.user = user;
  });

  $rootScope.$on('auth:new-registration', function(event, user) {
    console.log('sequencer caught event auth:new-registration with user = ' + JSON.stringify(user));
    $scope.user = user;
    // $state.go('sequencer');
  });

  $rootScope.$on('auth:login', function(event, user) {
    console.log('sequencer caught event auth:login with user = ' + JSON.stringify(user));
    // console.log('cookies: ' + JSON.stringify($browser.cookies()));
    $scope.user = user;
    // $state.go('sequencer');
  });

  $rootScope.$on('auth:logout', function(/* event, user */) {
    $scope.user = null;
    // $state.go('login');
  });

  var seq = this;

  var dotSettings   = { 'volume': -15 };
  var bangSettings  = { 'volume': -8 };
  var commaSettings = { 'volume': -20,
                        'envelope': {
                          'attack':  0.05,
                          'decay':   0.3,
                          'sustain': 0.5,
                          'release': 0.001
                        },
                      };
  
    // default sampler amp envelope
    // {attack: 0.001, decay: 0, sustain: 1, release: 0.1}


    $rootScope.$on('kit loaded', function() {
      $scope.buffersLoaded = false;
      seq.drumCount = SampleService.drumCount;
      seq.drumNames = SampleService.drumNames;
      seq.currentKit = SampleService.currentKit;
      console.log(seq.currentKit);
      initSamplers();
      console.log('sequencer has drums');
    });

    // var notation = {};


    $rootScope.$on('notation loaded', function () {
      seq.notation = NotationService.notation;
      console.log('sequencer has notation');
      // console.log(JSON.stringify(notation));
      // return notation;
    });



    // var buffers = buffers();

    function initSamplers() {
      // seq.mainSampler = new Tone.PolySynth(seq.drumCount, Tone.Sampler, seq.currentKit);

      // seq.dotSampler = seq.mainSampler.set(dotSettings).toMaster();
      // seq.bangSampler = seq.mainSampler.set(bangSettings).toMaster();
      // seq.commaSampler = seq.mainSampler.set(commaSettings).toMaster();

      // seq.dotSampler = new Tone.PolySynth(seq.drumCount, Tone.Sampler, seq.currentKit).toMaster();
      // seq.dotSampler.set(dotSettings);

      // seq.bangSampler = new Tone.PolySynth(seq.drumCount, Tone.Sampler, seq.currentKit).toMaster();
      // seq.bangSampler.set(bangSettings);

      // seq.commaSampler = new Tone.PolySynth(seq.drumCount, Tone.Sampler, seq.currentKit).toMaster();
      // seq.commaSampler.set(commaSettings);

      

      seq.dotSampler = new Tone.Sampler(seq.currentKit).toMaster();
      seq.dotSampler.set(dotSettings);

      seq.bangSampler = new Tone.Sampler(seq.currentKit).toMaster();
      seq.bangSampler.set(bangSettings);

      seq.commaSampler = new Tone.Sampler(seq.currentKit).toMaster();
      seq.commaSampler.set(commaSettings);

      Tone.Buffer.onprogress = function(percent){
        $scope.$apply(function(){
          $scope.bufferProgress = (percent * 100).toFixed(0);
        });
        console.log($scope.bufferProgress);
      };

      Tone.Buffer.onload = function(){
        $scope.$apply(function(){
          $scope.buffersLoaded = true;
        });
        console.log('everything is loaded');        
      };
    }


    // Tone.Transport.setInterval(function(){
    //   $scope.$apply(function() {
    //     $scope.position = Tone.Transport.position;
    //   });
    // }, '16n'); 

    var stepNumber = 0;

    Tone.Transport.setInterval(function(time){
      for (var i = 0; i < seq.drumCount; i++){
        if (seq.notation.channels[i].notes[stepNumber].value === '.') {
          seq.dotSampler.triggerAttack(seq.drumNames[i], time);
        } else if (seq.notation.channels[i].notes[stepNumber].value === '!') {
          seq.bangSampler.triggerAttack(seq.drumNames[i], time);
        } else if (seq.notation.channels[i].notes[stepNumber].value === ',') {
          seq.commaSampler.triggerAttack(seq.drumNames[i], time);
        }
      }
      stepNumber++;
      stepNumber = stepNumber % (8 * Tone.Transport.timeSignature);
    }, '16n');

      // Example setting (for MonoSynth) from Tone Docs
        // {
        //   "volume": -10,
        //        pitch!
        //   "portamento": 0.05,
        //   "oscillator": {
        //     "type": "square"
        //   },
        //   "filter": {
        //     "Q": 6,
        //     "type": "lowpass",
        //     "rolloff": -24
        //   },
        //   "envelope": {
        //     "attack": 0.005,
        //     "decay": 0.01,
        //     "sustain": 0.9,
        //     "release": 0.001
        //   },
        //   "filterEnvelope": {
        //     "attack": 0.006,
        //     "decay": 0.02,
        //     "sustain": 0.5,
        //     "release": 0.001,
        //     "min": 10,
        //     "max": 4000
        //   }
        // }
}]);