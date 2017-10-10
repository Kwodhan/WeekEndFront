/// <reference path="../app.ts" />
'use strict';

/**
* @ngdoc service
* @name weekEndApp.Session
* @description
* # Session
* Service in the weekEndApp.
*/
angular.module('weekEndApp')
.service('Session', function () {
  this.create = function (user, userRole,basic) {
    this.user = user;
    this.userRole = userRole;
    this.basic = basic;
  };
  this.destroy = function () {

    this.user = null;
    this.userRole = null;
    this.basic = null;
  };
})
