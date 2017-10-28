/// <reference path="../app.d.ts" />
declare module weekEndApp.Services {
    class ActivitiesRest {
        private $resource;
        private urlWeekTest;
        private $localStorage;
        static $inject: string[];
        urlBase: string;
        constructor($resource: any, urlWeekTest: any, $localStorage: any);
        getActivity(id: any): any;
        getActivities(): any;
    }
}
