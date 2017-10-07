'use strict';

/**
 * @ngdoc function
 * @name weekEndProjectApp.controller:applicationCtrl
 * @description
 * # ApplicationCtrl
 * Controller of the weekEndProjectApp
 */
angular.module('weekEndProjectApp')
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
