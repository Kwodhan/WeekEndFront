'use strict';

/**
 * @ngdoc function
 * @name weekEndProjectApp.controller:Applicationcontroller
 * @description
 * # ApplicationcontrollerCtrl
 * Controller of the weekEndProjectApp
 */
angular.module('weekEndProjectApp')
.controller('ApplicationController', function ($scope,
                                             USER_ROLES,
                                             AuthService) {
$scope.currentUser = null;
$scope.userRoles = USER_ROLES;
$scope.isAuthorized = AuthService.isAuthorized;

$scope.setCurrentUser = function (user) {
  $scope.currentUser = user;
};
})
