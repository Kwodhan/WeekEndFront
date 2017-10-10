/// <reference path="../app.ts" />
'use strict';

/**
* @ngdoc function
* @name weekEndApp.controller:ListactivitiesCtrl
* @description
* # ListactivitiesCtrl
* Controller of the weekEndApp
*/
angular.module('weekEndApp')
.controller('ListsitesGerantCtrl', ['$scope','SitesRest',function ($scope,SitesRest) {
  var promise = SitesRest.getSites();
  promise.then(function(data) {
    $scope.liste = data.data;
  });

}]);
