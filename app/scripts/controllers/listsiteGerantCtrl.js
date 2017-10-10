'use strict';

/**
* @ngdoc function
* @name weekEndProjectApp.controller:ListactivitiesCtrl
* @description
* # ListactivitiesCtrl
* Controller of the weekEndProjectApp
*/
angular.module('weekEndProjectApp')
.controller('ListsitesGerantCtrl', ['$scope','SitesRest',function ($scope,SitesRest) {
  var promise = SitesRest.getSites();
  promise.then(function(data) {
    $scope.liste = data.data;
  });

}]);
