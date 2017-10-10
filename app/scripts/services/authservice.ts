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
.factory('AuthService', function ($http, Session,urlWeekTest) {

  var urlBase = '/auth/';


  this.registration = function (credentials) {

    var basic ="Basic "+ btoa(credentials.pseudo+':'+credentials.password);
    return $http
    .post(urlWeekTest+urlBase+'registration', credentials)
    .then(function (res) {

      Session.create(res.data ,
        res.data.roles[0],basic);
        // $http.defaults.headers.common.Authorization = basic;
        return res.data;
      });
    };

    this.login = function (credentials) {

      var basic ="Basic "+ btoa(credentials.pseudo+':'+credentials.password);
      return $http
      .post(urlWeekTest+urlBase+'login', credentials)
      .then(function (res) {

        Session.create(res.data ,
          res.data.roles[0],basic);
          // $http.defaults.headers.common.Authorization = basic;
          return res.data;
        });
      };

      this.logout = function () {
        Session.destroy();
        // $http.defaults.headers.common.Authorization = '';
      };

      this.isAuthenticated = function () {
        return !!Session.user;
      };

      this.isAuthorized = function (authorizedRoles) {
        if (!angular.isArray(authorizedRoles)) {
          authorizedRoles = [authorizedRoles];
        }
        return (this.isAuthenticated() &&
        authorizedRoles.indexOf(Session.userRole) !== -1);
      };

      return this;
    })
