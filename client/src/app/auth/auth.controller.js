'use strict';

angular.module('dotBang')
.controller('AuthCtrl', function ($scope, $rootScope, AuthService) {
  console.log('AuthCtrl is alive!');

  $scope.register = function() {
    AuthService.register($scope.user)
    .success(function(user) {
      $rootScope.$emit('auth:new-registration', user);
    })
    .error(function(error) {
      alert('Registration Failed: ' + JSON.stringify(error));
    });
  };

  $scope.login = function() {
    AuthService.login($scope.session)
    .success(function(user) {
      $rootScope.$emit('auth:login', user);
    })
    .error(function(error) {
      alert('Login Failed: ' + JSON.stringify(error));
      $scope.session = {};
    });
  };
});
