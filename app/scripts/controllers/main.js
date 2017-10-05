'use strict';

/**
 * @ngdoc function
 * @name weekEndProjectApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the weekEndProjectApp
 */
angular.module('weekEndProjectApp')
  .controller('MainCtrl', ['$scope','AuthService','Person','Location',function ($scope, AuthService,Person,Location) {


        $scope.get = function() {
            var promise = Person.getPerson(1);
            promise.then(function(data) {
              console.log(data);

            });
            };



          $scope.location = function() {
              var promise = Location.getLocation(1);
              promise.then(function(data) {
                console.log(data);

              });
              };


}]);
