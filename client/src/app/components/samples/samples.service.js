'use strict';

angular.module('dotBang')
  .service('SampleService', ['$http', '$rootScope', function($http, $rootScope){

    var sampServ = this;

    // var kitData = {'name': 'rock', 'samples': [
    //   {'name': 'kick', 'url': '/app/audio/rock-kit/rock-kick.wav'},
    //   {'name': 'snare', 'url': '/app/audio/rock-kit/rock-snare.wav'},
    //   {'name': 'open high hat', 'url': '/app/audio/rock-kit/rock-hh-open.wav'},
    //   {'name': 'closed high hat', 'url': '/app/audio/rock-kit/rock-hh-closed.wav'},
    //   {'name': 'floor tom', 'url': '/app/audio/rock-kit/rock-tom-floor.wav'},
    //   {'name': 'rack tom', 'url': '/app/audio/rock-kit/rock-tom-rack.wav'},
    //   {'name': 'ride cymbal bell', 'url': '/app/audio/rock-kit/rock-cymbal-ride-bell.wav'},
    //   {'name': 'crash cymbal', 'url': '/app/audio/rock-kit/rock-cymbal-crash.wav'}
    // ]};

    sampServ.getKits = function() {
      return $http.get('/api/kits');
    };

    sampServ.getKit = function(kit) {
      $http.get('/api/kits/' + kit.id)
      .success(function(data){
        var kitData = data;
        console.log(kitData);
        drumCount(kitData);
        drumNames(kitData);
        convertForTone(kitData);
        mergeForTone(sampServ.forMerge);
        sampServ.kitName = kitData.name;
        console.log(JSON.stringify(sampServ.currentKit));
      })
      .error(function() {
        alert('GET: error');
      })
      .then(function(){
        $rootScope.$emit('kit loaded');
      });
    };

    // count for sequencer ctrl
    function drumCount(kitData){
      sampServ.drumCount = kitData.samples.length;
    }
    // array of drum names for sequencer and samples ctrls
    function drumNames(kitData){
      sampServ.drumNames =
      _.map(kitData.samples, function(sample){
        return sample.name;
      });
    }

    // conversion into {name: url} format for Tone 
    function convertForTone(kitData){
      sampServ.forMerge =
      _.map(kitData.samples, function(sample){
        var strippedSound = {};
        strippedSound[sample.name] = sample.url;
        return strippedSound;
      }); 
    }

    // merging array of objects into single object for Tone
    function mergeForTone(forMerge){
      sampServ.currentKit = {};
      _.forEach(forMerge, function(strippedSound){
        _.merge(sampServ.currentKit, strippedSound);
      });
    }

    // sampServ.currentKit = kitForTone;

  }]);


// {
// id: 2,
// name: "Rock",
// created_at: "2015-04-07T01:14:50.098Z",
// updated_at: "2015-04-07T01:14:50.098Z",
// score_id: null,
// samples: [
// {
// kit_id: 2,
// id: 9,
// name: "kick",
// url: "/app/audio/rock-kit/rock-kick.wav",
// created_at: "2015-04-07T01:14:50.118Z",
// updated_at: "2015-04-07T01:14:50.118Z"
// },
// {
// kit_id: 2,
// id: 10,
// name: "snare",
// url: "/app/audio/rock-kit/rock-snare.wav",
// created_at: "2015-04-07T01:14:50.127Z",
// updated_at: "2015-04-07T01:14:50.127Z"
// },
// {
// kit_id: 2,
// id: 11,
// name: "open high hat",
// url: "/app/audio/rock-kit/rock-hh-open.wav",
// created_at: "2015-04-07T01:14:50.135Z",
// updated_at: "2015-04-07T01:14:50.135Z"
// },
// {
// kit_id: 2,
// id: 12,
// name: "closed high hat",
// url: "/app/audio/rock-kit/rock-hh-closed.wav",
// created_at: "2015-04-07T01:14:50.143Z",
// updated_at: "2015-04-07T01:14:50.143Z"
// },
// {
// kit_id: 2,
// id: 13,
// name: "floor tom",
// url: "/app/audio/rock-kit/rock-tom-floor.wav",
// created_at: "2015-04-07T01:14:50.145Z",
// updated_at: "2015-04-07T01:14:50.145Z"
// },
// {
// kit_id: 2,
// id: 14,
// name: "rack tom",
// url: "/app/audio/rock-kit/rock-tom-rack.wav",
// created_at: "2015-04-07T01:14:50.147Z",
// updated_at: "2015-04-07T01:14:50.147Z"
// },
// {
// kit_id: 2,
// id: 15,
// name: "ride cymbal bell",
// url: "/app/audio/rock-kit/rock-cymbal-ride-bell.wav",
// created_at: "2015-04-07T01:14:50.149Z",
// updated_at: "2015-04-07T01:14:50.149Z"
// },
// {
// kit_id: 2,
// id: 16,
// name: "crash cymbal",
// url: "/app/audio/rock-kit/rock-cymbal-crash.wav",
// created_at: "2015-04-07T01:14:50.151Z",
// updated_at: "2015-04-07T01:14:50.151Z"
// }
// ]
// }