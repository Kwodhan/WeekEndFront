/// <reference path="../app.ts" />
'use strict';

/**
* @ngdoc service
* @name weekEndApp.AuthService
* @description
* # AuthService
* Factory in the weekEndApp.
*/
angular.module('weekEndApp')
.factory('AuthService', function ($http,urlWeekTest,$localStorage) {

  var urlBase = '/auth/';


  this.registration = function (credentials) {

    var basic ="Basic "+ btoa(credentials.pseudo+':'+credentials.password);
    return $http
    .post(urlWeekTest+urlBase+'registration', credentials)
    .then(function (res) {


        $localStorage.currentUser = {user : res.data ,role:
          res.data.roles[0],basic:basic}

        return res.data;
      },function (res) {

          return null;

      });
    };

    this.login = function (credentials) {

      var basic ="Basic "+ btoa(credentials.pseudo+':'+credentials.password);
      return $http
      .post(urlWeekTest+urlBase+'login', credentials)
      .then(function (res) {


          $localStorage.currentUser = {user : res.data ,role:
            res.data.roles[0],basic:basic}
          return res.data;
        },function (res) {
          // 401 unauthorized
          return null;

        })
      };

      this.logout = function () {

        delete $localStorage.currentUser;

      };

      this.isAuthenticated = function () {
        return !!$localStorage.currentUser.user;
      };

      this.isAuthorized = function (authorizedRoles) {
        if (!angular.isArray(authorizedRoles)) {
          authorizedRoles = [authorizedRoles];
        }
        return (this.isAuthenticated() &&
        authorizedRoles.indexOf($localStorage.currentUser.role) !== -1);
      };

      return this;
    })
