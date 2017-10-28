/// <reference path="../app.d.ts" />
/**
* @ngdoc service
* @name weekEndApp.Person
* @description api for
* # Person
* Service in the weekEndApp.
*/
declare module weekEndApp.Services {
    class PersonsRest {
        private $resource;
        private urlWeekTest;
        private $localStorage;
        static $inject: string[];
        urlBase: string;
        constructor($resource: any, urlWeekTest: any, $localStorage: any);
        getPerson(id: any): any;
    }
}
