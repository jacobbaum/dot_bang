'use strict';

angular.module('dotBang')
.controller('NavbarCtrl',['$scope', '$rootScope', '$state', '$browser', 'AuthService', function ($scope, $rootScope, $state, $browser, AuthService) {

  console.log('NavbarCtrl is alive!');

  $scope.tabs = [
    { state: 'home',   label: 'Home',   active: true,  isPublic: true  },
    { state: 'sequencer', label: 'Sequencer', active: false, isPublic: true }
  ];

  $scope.getTabClass = function(tab) {
    return tab.active ? 'active' : '';
  };

  $scope.$on('$stateChangeSuccess', function() {
    $scope.tabs.forEach(function(tab) {
      tab.active = $state.is(tab.state);
    });
  });

  $scope.isAuthenticated = function() {
    return !!$scope.user;
  };

  $scope.showTab = function(tab) {
    return tab.isPublic || $scope.isAuthenticated();
  };

  // See if we already have a session
  AuthService.getSession().success(function(user) {
    $scope.user = user;
  });

  $scope.logout = function() {
    console.log('NavbarCtrl.logout');
    AuthService.logout().success(function() {
      $rootScope.$emit('auth:logout');
    });
  };

  $rootScope.$on('auth:new-registration', function(event, user) {
    // console.log('caught event auth:new-registration with user = ' + JSON.stringify(user));
    $scope.user = user;
    $state.go('sequencer');
  });

  $rootScope.$on('auth:login', function(event, user) {
    // console.log('caught event auth:login with user = ' + JSON.stringify(user));
    console.log('cookies: ' + JSON.stringify($browser.cookies()));
    $scope.user = user;
    $state.go('sequencer');
  });

  $rootScope.$on('auth:logout', function(/* event, user */) {
    $scope.user = null;
    $state.go('login');
  });
}]);

