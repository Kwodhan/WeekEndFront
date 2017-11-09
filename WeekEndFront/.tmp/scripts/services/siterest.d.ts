/// <reference path="../app.d.ts" />
declare module weekEndApp.Services {
    class SitesRest {
        private $resource;
        private urlWeekTest;
        private $localStorage;
        private UpdateSite;
        static $inject: string[];
        urlBase: string;
        constructor($resource: any, urlWeekTest: any, $localStorage: any, UpdateSite: any);
        getSite(id: any): any;
        deleteSite(id: any): void;
        getSites(): any;
        postSite(site: any): any;
        updateSite(site: any): any;
    }
}
