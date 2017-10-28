/// <reference path="../app.d.ts" />
/**
* @ngdoc function
* @name weekEndApp.controller:UpdatesitegerantCtrl
* @description
* # UpdatesitegerantCtrl
* Controller of the weekEndApp
*/
declare module weekEndApp.Controllers {
    class UpdatesiteGerantCtrl {
        private $scope;
        private $http;
        private LocationsRest;
        private SitesRest;
        private $routeParams;
        private ActivitiesRest;
        private $location;
        static $inject: string[];
        constructor($scope: any, $http: any, LocationsRest: any, SitesRest: any, $routeParams: any, ActivitiesRest: any, $location: any);
        initController(): void;
        ajouterLocation(marker: any): void;
        onPositionUpdate(latitude: any, longitude: any): void;
        pin_url(pin_label: any): string;
        searchCityRegion(data: any): {
            city: any;
            region: any;
        };
        containt(nameKey: any, myArray: any): boolean;
        remove(nameKey: any, myArray: any): any;
    }
}
