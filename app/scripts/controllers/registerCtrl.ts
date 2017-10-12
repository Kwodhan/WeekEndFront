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
.controller('RegisterCtrl',['$scope', '$rootScope','$location', 'AUTH_EVENTS', 'AuthService',function ($scope, $rootScope,$location, AUTH_EVENTS, AuthService) {
  $scope.credentials = {
    pseudo: '',
    password: '',
    emailAddress:''
  };


  $scope.register = function (credentials) {

    if(!(credentials.pseudo && credentials.password && credentials.emailAddress) ){
      $scope.errors="A problem occurred";
      return;
    }
    AuthService.registration(credentials).then(function (user) {
      if(user){
        $rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
        $scope.setCurrentUser(user);
        $location.path('/');
      }else{
          $scope.errors="That Pseudo is already taken";
      }
    });
  };


}]);
