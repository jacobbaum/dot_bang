'use strict';

angular.module('dotBang')
  .controller('SamplesCtrl', ['$scope', 'SampleService', function ($scope, SampleService) {

    $scope.drumNames = SampleService.drumNames;
    
}]);