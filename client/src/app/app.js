'use strict';

angular.module('dotBang', 
  [ 'ngAnimate', 
    'ngCookies', 
    'ngTouch', 
    'ngSanitize', 
    'ui.router',
    'ngMessages',
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
    onEnter: function(NotationService, AuthService, SampleService) {
      var allNotations = [];
      return NotationService.getNotations()
      .success(function(data) {
        allNotations = data;
        console.log(allNotations); 
      })
      .error(function() {
        alert('GET: error');
      })
      .then(function(){
        var user = AuthService.currentUser;
        if (AuthService.isAuthenticated() && _.some(allNotations, 'user_id', user.id)) {
          var defaultNotation = 
            _.find(allNotations, function(notation){
              return notation['user_id'] === user.id;
            });
          NotationService.getNotation(defaultNotation);
        } else {
          var defaultNotation = 
            _.find(allNotations, function(notation){
              return notation.name === 'Demo';
          });
          NotationService.getNotation(defaultNotation);
        }
      })
      .then(function(){
        var allKits = [];
        return SampleService.getKits()
        .success(function(data) {
          allKits = data;
          console.log(allKits);
        })  
        .error(function() {
          alert('GET: error');
        })
        .then(function(){
          var defaultKit = 
          _.find(allKits, function(kit){
            return kit.name === 'Rock';
          });
        SampleService.getKit(defaultKit);  
        });  
      });
    } // on enter end
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
    'default': '500', 
    'hue-1': '200', 
    'hue-2': '700', 
    'hue-3': '800' 
  })
  .accentPalette('amber');
}]);

  /******* TODO ********/

  // Nested states?
  // Other options for template urls?

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

 