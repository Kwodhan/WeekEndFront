/// <reference path="../app.d.ts" />
declare module weekEndApp.Factory {
    class UpdateUser {
        private $resource;
        private urlWeekTest;
        private $localStorage;
        constructor($resource: any, urlWeekTest: any, $localStorage: any);
        updateActivity(idu: number, ida: number): any;
        updateLocation(idu: number, idl: number): any;
    }
}
