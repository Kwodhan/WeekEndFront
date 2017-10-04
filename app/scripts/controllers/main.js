'use strict';

/**
 * @ngdoc function
 * @name weekEndProjectApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the weekEndProjectApp
 */
angular.module('weekEndProjectApp')
  .controller('MainCtrl', ['$scope','Person',function ($scope, Person) {
    $scope.go = function() {
        var promise = Person.getPerson(1);
        promise.then(function(data) {
          console.log(data);
          $scope.person = data;
        });
        };
}]);
