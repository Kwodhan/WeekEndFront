/// <reference path="../app.d.ts" />
/**
* @ngdoc function
* @name weekEndApp.controller:ListactivitiesCtrl
* @description
* # ListactivitiesCtrl
* Controller of the weekEndApp
*/
declare module weekEndApp.Controllers {
    class ListsitesGerantCtrl {
        private $scope;
        private SitesRest;
        static $inject: string[];
        constructor($scope: any, SitesRest: any);
        initController(): void;
    }
}
