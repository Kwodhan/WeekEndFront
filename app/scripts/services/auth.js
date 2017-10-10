'use strict';

/**
* @ngdoc service
* @name weekEndProjectApp.auth
* @description
* # auth
* Factory in the weekEndProjectApp.
*/
angular.module('weekEndProjectApp')
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
