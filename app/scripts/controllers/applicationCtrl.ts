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
  AuthService,$localStorage) {
    initController();

    function initController() {

      if($localStorage.currentUser){
        $scope.currentUser = $localStorage.currentUser.user;
        $scope.userRoles = USER_ROLES;
        $scope.isAuthorized = AuthService.isAuthorized;
      }
      else{
        $scope.currentUser = null;
        $scope.userRoles = USER_ROLES;
        $scope.isAuthorized = AuthService.isAuthorized;
      }
    }


    $scope.setCurrentUser = function (user) {
      $localStorage.currentUser.user = user;
      $scope.currentUser = user;
    };
  })
