'use strict';

/**
 * @ngdoc service
 * @name weekEndProjectApp.AuthService
 * @description
 * # AuthService
 * Factory in the weekEndProjectApp.
 */
angular.module('weekEndProjectApp')
.factory('AuthService', function ($http, Session,urlWeekTest) {
  var authService = {};
var urlBase = '/auth/';


  authService.login = function (credentials) {

      var basic ="Basic "+ btoa(credentials.pseudo+':'+credentials.password);
    return $http
      .post(urlWeekTest+urlBase+'registration', credentials)
      .then(function (res) {
        console.log(res);
        Session.create(res.data.pseudo ,
                       res.data.roles[0],basic);
          $http.defaults.headers.common.Authorization = basic;
        var user= {pseudo:credentials.pseudo};
        return user;
      });
  };

  authService.logout = function () {
    Session.destroy();
    $http.defaults.headers.common.Authorization = '';
  };

  authService.isAuthenticated = function () {
    return !!Session.userId;
  };

  authService.isAuthorized = function (authorizedRoles) {
    if (!angular.isArray(authorizedRoles)) {
      authorizedRoles = [authorizedRoles];
    }
    return (authService.isAuthenticated() &&
      authorizedRoles.indexOf(Session.userRole) !== -1);
  };

  return authService;
})
