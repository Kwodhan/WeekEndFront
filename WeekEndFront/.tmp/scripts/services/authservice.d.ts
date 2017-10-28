/// <reference path="../app.d.ts" />
declare module weekEndApp.Factory {
    class AuthService {
        private $resource;
        private urlWeekTest;
        private $localStorage;
        private USER_ROLES;
        urlBase: string;
        constructor($resource: any, urlWeekTest: any, $localStorage: any, USER_ROLES: any);
        registration(credentials: any): any;
        login(credentials: any): any;
        logout(): void;
        isAuthorized(authorizedRoles: any): boolean;
    }
}
