/// <reference path="../app.d.ts" />
/**
* @ngdoc service
* @name weekEndApp.location
* @description
* # location
* Service in the weekEndApp.
*/
declare module weekEndApp.Services {
    class LocationsRest {
        private $resource;
        private urlWeekTest;
        private $localStorage;
        private UpdateSite;
        static $inject: string[];
        urlBase: string;
        constructor($resource: any, urlWeekTest: any, $localStorage: any, UpdateSite: any);
        getLocation(id: any): any;
        getLocations(): any;
        postLocation(marker: any): any;
    }
}
