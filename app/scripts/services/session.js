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
  this.create = function (userId, userRole,basic) {
    console.log(userRole);
    this.userId = userId;
    this.userRole = userRole;
    this.basic = basic;
  };
  this.destroy = function () {

    this.userId = null;
    this.userRole = null;
    this.basic = null;
  };
})
