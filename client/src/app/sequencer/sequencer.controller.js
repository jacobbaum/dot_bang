'use strict';

angular.module('dotBang')
  .controller('SequencerCtrl', function ($scope, $window, NotationService, SampleService) {

    var Tone = $window.Tone;

    var dotSettings = { 'volume': -15 };
    var bangSettings =  { 'volume': -10 };
  
    var drumCount = SampleService.drumCount;
    var drumNames = SampleService.drumNames;
    var currentKit = SampleService.currentKit;

    var notation = NotationService.notation;

    var stepNumber = 0;

    // init sampler with drumCount and currentKit 
    var dotSampler = new Tone.PolySynth(drumCount, Tone.Sampler, currentKit).toMaster();
    dotSampler.set(dotSettings);

    // init sampler with drumCount and currentKit 
    var bangSampler = new Tone.PolySynth(drumCount, Tone.Sampler, currentKit).toMaster();
    bangSampler.set(bangSettings);

    Tone.Transport.setInterval(function(time){
      for (var i = 0; i < drumCount; i++){
        if (notation.channels[i].notes[stepNumber].value === '.') {
          dotSampler.triggerAttack(drumNames[i], time);
        } else if (notation.channels[i].notes[stepNumber].value === '!') {
          bangSampler.triggerAttack(drumNames[i], time);
        }
      }  // need time signature here
      stepNumber++;
      stepNumber = stepNumber % (8 * Tone.Transport.timeSignature);
    }, '16n');

      // Example setting (for MonoSynth) from Tone Docs
        // {
        //   "volume": -10,
             //   pitch!
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
});