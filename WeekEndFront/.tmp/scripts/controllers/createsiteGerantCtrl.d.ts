/// <reference path="../app.d.ts" />
/**
* @ngdoc function
* @name weekEndApp.controller:ListsiteCtrl
* @description
* # ListsiteCtrl
* Controller of the weekEndApp
*/
declare module weekEndApp.Controllers {
    class CreatesiteGerantCtrl {
        private $scope;
        private LocationsRest;
        private ActivitiesRest;
        private SitesRest;
        private UserRest;
        private $http;
        private $location;
        static $inject: string[];
        constructor($scope: any, LocationsRest: any, ActivitiesRest: any, SitesRest: any, UserRest: any, $http: any, $location: any);
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
