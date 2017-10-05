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
  .config(['$httpProvider','$routeProvider','USER_ROLES',function ($httpProvider,$routeProvider,USER_ROLES) {
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
      .when('/stop', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about',
        data: {
      authorizedRoles: [USER_ROLES.admin, USER_ROLES.editor]
    }
      })
      .otherwise({
        redirectTo: '/'
      });

       $httpProvider.defaults.headers.common['Access-Control-Allow-Headers'] = '*';
  }])
  .run(['$rootScope','$http','$location', 'AUTH_EVENTS', 'AuthService',function ($rootScope, $http, $location,AUTH_EVENTS, AuthService) {
        // keep user logged in after page refresh

        // if ($localStorage.currentUser) {
        //     $http.defaults.headers.common.Authorization = $localStorage.currentUser.basic;
        // }

        // redirect to login page if not logged in and trying to access a restricted page
        // $rootScope.$on('$locationChangeStart', function (event, next, current) {
        //
        //     var restrictedPage = routesThatDontRequireAuth.indexOf($location.path()) === -1;
        //     if (restrictedPage && !$localStorage.currentUser) {
        //         $location.path('/login');
        //     }
        // });
        $rootScope.$on('$stateChangeStart', function (event, next) {
    var authorizedRoles = next.data.authorizedRoles;
    if (!AuthService.isAuthorized(authorizedRoles)) {
      event.preventDefault();
      if (AuthService.isAuthenticated()) {
        // user is not allowed
        $rootScope.$broadcast(AUTH_EVENTS.notAuthorized);
      } else {
        // user is not logged in
        $rootScope.$broadcast(AUTH_EVENTS.notAuthenticated);
      }
    }
  });
      }])
      ;
