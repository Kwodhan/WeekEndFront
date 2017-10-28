/// <reference path="../app.d.ts" />
declare module weekEndApp.Controllers {
    class ApplicationCtrl {
        private $scope;
        private USER_ROLES;
        private AuthService;
        private $localStorage;
        static $inject: string[];
        constructor($scope: any, USER_ROLES: any, AuthService: any, $localStorage: any);
        initController(): void;
    }
}
