/// <reference path="../app.d.ts" />
declare module weekEndApp.Factory {
    class UpdateSite {
        private $resource;
        private urlWeekTest;
        private $localStorage;
        constructor($resource: any, urlWeekTest: any, $localStorage: any);
        update(id: number, name: string, siteWeb: string, location: any, activities: any): any;
    }
}
