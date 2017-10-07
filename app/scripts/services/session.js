'use strict';

/**
 * @ngdoc service
 * @name weekEndProjectApp.Session
 * @description
 * # Session
 * Service in the weekEndProjectApp.
 */
angular.module('weekEndProjectApp')
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
