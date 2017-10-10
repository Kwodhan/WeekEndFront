/// <reference path="../app.ts" />

'use strict';

/**
* @ngdoc function
* @name weekEndApp.controller:applicationCtrl
* @description
* # ApplicationCtrl
* Controller of the weekEndApp
*/
angular.module('weekEndApp')
.controller('ApplicationCtrl', function ($scope,
  USER_ROLES,
  AuthService) {
    $scope.currentUser = null;
    $scope.userRoles = USER_ROLES;
    $scope.isAuthorized = AuthService.isAuthorized;

    $scope.setCurrentUser = function (user) {
      $scope.currentUser = user;
    };
  })
