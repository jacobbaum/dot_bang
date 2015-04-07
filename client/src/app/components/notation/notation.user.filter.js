'use strict';

angular.module('dotBang')
.filter('userNotation', ['AuthService', function(AuthService) {
  return function(notations, user) {
    if (!AuthService.isAuthenticated) {
      _.filter(notations, function(notation){
        return notation['user_id'] === user.id;
      });
    } 
  };
}]);


  // app.filter('startsWithLetter', function () {
  //   return function (items, letter) {
  //       var filtered = [];
  //       var letterMatch = new RegExp(letter, 'i');
  //       for (var i = 0; i < items.length; i++) {
  //           var item = items[i];
  //           if (letterMatch.test(item.name.substring(0, 1))) {
  //               filtered.push(item);
  //           }
  //       }
  //       return filtered;
  //   };
  // });
