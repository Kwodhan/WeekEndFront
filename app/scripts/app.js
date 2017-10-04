'use strict';

/**
 * @ngdoc overview
 * @name weekEndProjectApp
 * @description
 * # weekEndProjectApp
 *
 * Main module of the application.
 */
angular
  .module('weekEndProjectApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(['$httpProvider','$routeProvider',function ($httpProvider,$routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });

       $httpProvider.interceptors.push('auth');
       $httpProvider.defaults.headers.common['Access-Control-Allow-Headers'] = '*';

  }]);
