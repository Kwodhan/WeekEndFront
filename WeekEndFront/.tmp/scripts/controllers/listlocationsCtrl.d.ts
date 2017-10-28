/// <reference path="../app.d.ts" />
/**
* @ngdoc function
* @name weekEndApp.controller:ListelocationCtrl
* @description
* # ListelocationCtrl
* Controller of the weekEndApp
* APIGoogle = AIzaSyAau09m1LQhDtd3YJvZ9mJYH91RRN4JOCU
*/
declare module weekEndApp.Controllers {
    class ListLocationsCtrl {
        private $scope;
        private LocationsRest;
        private UserRest;
        private $http;
        static $inject: string[];
        constructor($scope: any, LocationsRest: any, UserRest: any, $http: any);
        initController(): void;
        ajouterLocation(marker: any): void;
        onPositionUpdate(latitude: any, longitude: any): void;
        ajouter(id: any): void;
        enlever(id: any): void;
        pin_url(pin_label: any): string;
        searchCityRegion(data: any): {
            city: any;
            region: any;
        };
        containt(nameKey: any, myArray: any): boolean;
        remove(nameKey: any, myArray: any): any;
    }
}
