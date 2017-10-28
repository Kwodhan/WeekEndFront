/// <reference path="../app.d.ts" />
/**
* @ngdoc service
* @name weekEndApp.location
* @description
* # location
* Service in the weekEndApp.
*/
declare module weekEndApp.Services {
    class UserRest {
        private $resource;
        private urlWeekTest;
        private $localStorage;
        private UpdateUser;
        static $inject: string[];
        urlBase: string;
        constructor($resource: any, urlWeekTest: any, $localStorage: any, UpdateUser: any);
        addActivity(id: any): any;
        removeActivity(id: any): any;
        addHome(id: any): any;
        removeHome(id: any): any;
    }
}
