/// <reference path="../app.d.ts" />
/**
* @ngdoc function
* @name weekEndApp.controller:LoginCtrl
* @description
* # LoginCtrl
* Controller of the weekEndApp
*/
declare module weekEndApp.Controllers {
    class LoginCtrl {
        private $scope;
        private $rootScope;
        private AUTH_EVENTS;
        private AuthService;
        private $location;
        private $route;
        static $inject: string[];
        constructor($scope: any, $rootScope: any, AUTH_EVENTS: any, AuthService: any, $location: any, $route: any);
        initController(): void;
    }
}
