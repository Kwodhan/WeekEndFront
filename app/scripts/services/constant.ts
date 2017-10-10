/// <reference path="../app.ts" />
'use strict';

/**
* @ngdoc service
* @name weekEndApp.urlWeek
* @description
* # urlWeek
* Constant in the weekEndApp.
*/

//EndPointUrl
angular.module('weekEndApp')
.constant('urlWeek', 'http://148.60.11.118:8081/WeekEndProject/api');

angular.module('weekEndApp')
.constant('urlWeekTest', 'http://localhost:8080/WeekEndProject/api');

// AuthService
angular.module('weekEndApp')
.constant('AUTH_EVENTS', {
  loginSuccess: 'auth-login-success',
  loginFailed: 'auth-login-failed',
  logoutSuccess: 'auth-logout-success',
  sessionTimeout: 'auth-session-timeout',
  notAuthenticated: 'auth-not-authenticated',
  notAuthorized: 'auth-not-authorized'
})


angular.module('weekEndApp')
.constant('USER_ROLES', {
  admin: 'ROLE_ADMIN',
  gerant: 'ROLE_GERANT',
  user: 'ROLE_USER',
  guest: 'ROLE_GUEST'
})
