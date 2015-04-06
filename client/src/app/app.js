'use strict';

angular.module('dotBang', 
  [ 'ngAnimate', 
    'ngCookies', 
    'ngTouch', 
    'ngSanitize', 
    'ui.router',
    'ngMaterial',
  ])
.config(['$httpProvider', '$stateProvider', '$urlRouterProvider', '$mdThemingProvider', function($httpProvider, $stateProvider, $urlRouterProvider, $mdThemingProvider) {

  $httpProvider.defaults.withCredentials = true;

  $stateProvider
  // .state( 'home', {
  //   url: '/',
  //   templateUrl: 'app/main/main.html',
  //   controller: 'MainCtrl'
  // })
  .state('sequencer', {
    url: '/',
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
    },  
    onEnter: function(NotationService, AuthService) {
      var allNotations = [];
      return NotationService.getNotations()
      .success(function(data) {
        allNotations = data;
        console.log(allNotations); // This logs an array of objects
      })
      .error(function() {
        alert('GET: error');
      })
      .then(function(){
        if (AuthService.isAuthenticated()) {
          // console.log(JSON.stringify($scope.allNotations));
          var defaultNotation = 
            _.find(allNotations, function(notation){
              return notation['user_id'] === AuthService.currentUser.id;
            });
          NotationService.getNotation(defaultNotation);
        } else {
          var defaultNotation = 
            _.find(allNotations, function(notation){
              return notation.name === 'Demo';
            });
          NotationService.getNotation(defaultNotation);
        }
      });  
    } 
  })
  .state('about', {
    url: '/about',
    templateUrl: 'app/about/about.html'
  })
  .state('login', {
    url: '/login',
    templateUrl: 'app/auth/login.html',
    controller: 'AuthCtrl'
  })
  .state('register', {
    url: '/register',
    templateUrl: 'app/auth/register.html',
    controller: 'AuthCtrl'
  });

  $urlRouterProvider.otherwise('/'); 

  $mdThemingProvider.theme('default')
  .primaryPalette('grey', {
    'default': '600', 
    'hue-1': '200', 
    'hue-2': '800', 
    'hue-3': '900' 
  })
  .accentPalette('deep-orange');
}]);


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