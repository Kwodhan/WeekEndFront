/// <reference path="../app.d.ts" />
declare module weekEndApp.Controllers {
    class RegisterCtrl {
        private $scope;
        private $rootScope;
        private $location;
        private AUTH_EVENTS;
        private AuthService;
        static $inject: string[];
        constructor($scope: any, $rootScope: any, $location: any, AUTH_EVENTS: any, AuthService: any);
        initController(): void;
    }
}
