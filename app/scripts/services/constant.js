'use strict';

/**
 * @ngdoc service
 * @name weekEndProjectApp.urlWeek
 * @description
 * # urlWeek
 * Constant in the weekEndProjectApp.
 */

 //EndPointUrl
angular.module('weekEndProjectApp')
  .constant('urlWeek', 'http://148.60.11.118:8081/WeekEndProject/api');

  angular.module('weekEndProjectApp')
    .constant('urlWeekTest', 'http://localhost:8080/WeekEndProject/api');

// AuthService
  angular.module('weekEndProjectApp')
  .constant('AUTH_EVENTS', {
loginSuccess: 'auth-login-success',
loginFailed: 'auth-login-failed',
logoutSuccess: 'auth-logout-success',
sessionTimeout: 'auth-session-timeout',
notAuthenticated: 'auth-not-authenticated',
notAuthorized: 'auth-not-authorized'
})


  angular.module('weekEndProjectApp')
  .constant('USER_ROLES', {
  admin: 'ROLE_ADMIN',
  gerant: 'ROLE_GERANT',
    user: 'ROLE_USER',
  guest: 'ROLE_GUEST'
})
