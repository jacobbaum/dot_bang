'use strict';

angular.module('dotBang')
  .controller('SamplesCtrl', ['$scope', '$rootScope', 'SampleService', function ($scope, $rootScope, SampleService) {

    function getKits(){
      return SampleService.getKits()
      .success(function(data) {
        $scope.allKits = data;
        console.log($scope.allKits); 
      })
      .error(function() {
        alert('GET: error');
      });
    }

    getKits();

    $scope.getKit = function(kit){
      console.log(kit);
      SampleService.getKit(kit);
    };

    $rootScope.$on('kit loaded', function() {
      $scope.kitName = SampleService.kitName;
      $scope.drumNames = SampleService.drumNames;
    });
    
    
}]);