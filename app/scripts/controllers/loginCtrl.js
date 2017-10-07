'use strict';

/**
 * @ngdoc function
 * @name weekEndProjectApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the weekEndProjectApp
 */
angular.module('weekEndProjectApp')
.controller('LoginCtrl', function ($scope, $rootScope, AUTH_EVENTS, AuthService) {
  $scope.credentials = {
    pseudo: '',
    password: ''
  };
  $scope.login = function (credentials) {

    AuthService.login(credentials).then(function (user) {
      $rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
      $scope.setCurrentUser(user);
    }, function () {
      $rootScope.$broadcast(AUTH_EVENTS.loginFailed);
    });
  };

  $scope.logout = function (credentials) {
    AuthService.logout();
    $rootScope.$broadcast(AUTH_EVENTS.logoutSuccess);
    $scope.setCurrentUser(null);
  };

  $scope.register = function (credentials) {
    AuthService.registration(credentials).then(function (user) {
      $rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
      $scope.setCurrentUser(user);
    }, function () {
      $rootScope.$broadcast(AUTH_EVENTS.loginFailed);
    });
  };
})
