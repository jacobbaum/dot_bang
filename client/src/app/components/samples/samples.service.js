'use strict';

angular.module('dotBang')
  .service('SampleService', function(){

    var kitData = {'name': 'rock', 'samples': [
      {'name': 'kick', 'url': '/app/audio/rock-kit/rock-kick.wav'},
      {'name': 'snare', 'url': '/app/audio/rock-kit/rock-snare.wav'},
      {'name': 'open high hat', 'url': '/app/audio/rock-kit/rock-hh-open.wav'},
      {'name': 'closed high hat', 'url': '/app/audio/rock-kit/rock-hh-closed.wav'},
      {'name': 'floor tom', 'url': '/app/audio/rock-kit/rock-tom-floor.wav'},
      {'name': 'rack tom', 'url': '/app/audio/rock-kit/rock-tom-rack.wav'},
      {'name': 'ride cymbal bell', 'url': '/app/audio/rock-kit/rock-cymbal-ride-bell.wav'},
      {'name': 'crash cymbal', 'url': '/app/audio/rock-kit/rock-cymbal-crash.wav'}
    ]};

    // count for later use
    this.drumCount = kitData.samples.length;

    // array of drum names for later use
    this.drumNames =
    _.map(kitData.samples, function(sample){
      return sample.name;
    });

    // conversion into {name: url} format for Tone 
    var forMerge =
    _.map(kitData.samples, function(sample){
      var strippedSound = {};
      strippedSound[sample.name] = sample.url;
      return strippedSound;
    });

    // merging array of objects into single object for Tone
    var kitForTone = {};
    _.forEach(forMerge, function(strippedSound){
      _.merge(kitForTone, strippedSound);
    });
    
    this.currentKit = kitForTone;

  });