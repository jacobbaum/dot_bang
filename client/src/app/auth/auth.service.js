'use strict';

angular.module('dotBang')
.service('AuthService', function($http /*, $q */) {

  var that = this;

  that.currentUser = null;

  that.isAuthenticated = function() {
    return !!that.currentUser;
  };

  that.getSession = function() {
    return $http.get('/api/sessions').success(function(user) {
      console.log('getSession returned user = ' + JSON.stringify(user));
      that.currentUser = user;
    });
  };

  that.getSession();

  // that.mockUser = {
  //   name: 'Mock User',
  //   email: 'mock_user@gmail.com',
  //   password: 'secret'
  // };

  that.register = function(user) {
    console.log('register: user = ' + JSON.stringify(user));
    // return getMockLoginPromise();
    var deferred = $http.post('/api/users', { user: user });
    deferred.success(function(user) {
      that.currentUser = user;
    });
    return deferred;
  };

  that.login = function(session) {
    console.log('login: session = ' + JSON.stringify(session));
    // return getMockLoginPromise();
    var deferred = $http.post('/api/sessions', session);
    deferred.success(function(user) {
      that.currentUser = user;
    });
    return deferred;
  };

  that.logout = function() {
    console.log('logout');
    // return getMockLogoutPromise();
    var deferred = $http.delete('/api/sessions');
    deferred.success(function() {
      that.currentUser = null;
    });
    return deferred;
  };

  // MOCKING
  /*
  function getMockLoginPromise() {
    var deferred = $q.defer();
    setTimeout(function() {
      that.authenticated = true;
      that.currentUser = that.mockUser;
      deferred.resolve(that.currentUser);
    }, 1000);
    return deferred.promise;
  }

  function getMockLogoutPromise() {
    var deferred = $q.defer();
    setTimeout(function() {
      that.authenticated = false;
      that.currentUser = null;
      deferred.resolve(that.currentUser);
    }, 1000);
    return deferred.promise;
  }
  */
});
