'use strict';

angular.module('dotBang', 
  [ 'ngAnimate', 
    'ngCookies', 
    'ngTouch', 
    'ngSanitize', 
    'ngResource', 
    'ui.router',
    'ngMaterial',
  ])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state( 'home', {
      url: '/',
      templateUrl: 'app/main/main.html',
      controller: 'MainCtrl'
    })
    .state('sequencer', {
      url: '/sequencer',
      views: {
        '': {
          templateUrl: 'app/sequencer/sequencer.html',
          controller: 'SequencerCtrl'
        },
        'transport@sequencer': {
          templateUrl: 'app/components/transport/transport.html',
          controller: 'TransportCtrl'
        },
        'notation@sequencer': {
          templateUrl: 'app/components/notation/notation.html',
          controller: 'NotationCtrl'
        },
        'samples@sequencer': {
          templateUrl: 'app/components/samples/samples.html',
          controller: 'SamplesCtrl'
        },
        'controls@sequencer': {
          templateUrl: 'app/components/controls/controls.html',
          controller: 'ControlsCtrl'
        }
      } 
    })
    .state('about', {
      url: '/about',
      templateUrl: 'app/about/about.html'
    });
  $urlRouterProvider.otherwise('/');              
});


  // Nested states?

  // .state('sequencer', {
  //   url: '/sequencer',
  //   templateUrl: 'app/sequencer/sequencer.html',
  //   controller: 'SequencerCtrl'
  // })
  // .state('sequencer.transport', {
  //   templateUrl: 'components/transport/transport.html',
  //   controller: 'transportCtrl'
  // })
  // .state('sequencer.notation', {
  //   templateUrl: 'components/notation/notation.html',
  //   controller: 'notationCtrl'
  // })
  // .state('sequencer.samples', {
  //   templateUrl: 'components/samples/samples.html',
  //   controller: 'notationCtrl'
  // })
  // .state('sequencer.controls', {
  //   templateUrl: 'components/controls/controls.html',
  //   controller: 'notationCtrl'  
  // })

  // Named, nested views?
  //   .state('sequencer', {
  //     url: '/sequencer',
  //     views: {
  //       '': {
  //         templateUrl: 'app/sequencer/sequencer.html',
  //         controller: 'SequencerCtrl'
  //       },
  //       'transport': {
  //         templateUrl: 'components/transport/transport.html',
  //         controller: 'transportCtrl'
  //       },
  //       'notation': {
  //         templateUrl: 'components/notation/notation.html',
  //         controller: 'notationCtrl'
  //       },
  //       'samples': {
  //         templateUrl: 'components/samples/samples.html',
  //         controller: 'notationCtrl'
  //       },
  //       'controls': {
  //         templateUrl: 'components/controls/controls.html',
  //         controller: 'notationCtrl'
  //       }
  //     }  
  //   })
  //   .state('about', {
  //     url: 'about',
  //   });
  // $urlRouterProvider.otherwise('/');  