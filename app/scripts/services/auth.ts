/// <reference path="../app.ts" />
'use strict';

/**
* @ngdoc service
* @name weekEndApp.auth
* @description
* # auth
* Factory in the weekEndApp.
*/
angular.module('weekEndApp')
.factory('auth', [function() {
  return {
    // Send the Authorization header with each request
    'request': function(config) {
      config.headers = config.headers || {};
      var encodedString = btoa('temporary:temporary');
      config.headers.Authorization = 'Basic '+encodedString;
      return config;
    }
  };
}]);
