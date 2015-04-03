'use strict';

angular.module('dotBang')
  .controller('SamplesCtrl', function ($scope, SampleService) {

    $scope.drumNames = SampleService.drumNames;
    
});