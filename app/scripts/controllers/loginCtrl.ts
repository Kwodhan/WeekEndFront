/// <reference path="../app.ts" />
'use strict';

/**
* @ngdoc function
* @name weekEndApp.controller:LoginCtrl
* @description
* # LoginCtrl
* Controller of the weekEndApp
*/
angular.module('weekEndApp')
.controller('LoginCtrl', function ($scope, $rootScope, AUTH_EVENTS, AuthService,$route) {
  $scope.credentials = {
    pseudo: '',
    password: ''
  };

  $scope.login = function (credentials) {
    if(!(credentials.pseudo && credentials.password) ){
      $scope.errors="A problem occurred";
      return;
    }
    AuthService.login(credentials).then(function (user) {
      if(user){
        $rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
        $scope.setCurrentUser(user);
        $route.reload();
      }else{
        $scope.errors="Bad login or password";
      }
    });
  };

  $scope.logout = function (credentials) {

    $rootScope.$broadcast(AUTH_EVENTS.logoutSuccess);
    $scope.setCurrentUser(null);
    AuthService.logout();
      $scope.credentials = null;
      $route.reload();
  };

})
