/// <reference path="../app.d.ts" />
/**
* @ngdoc function
* @name weekEndApp.controller:ListactivitiesCtrl
* @description
* # ListactivitiesCtrl
* Controller of the weekEndApp
*/
declare module weekEndApp.Controllers {
    class ListActivitiesCtrl {
        private $scope;
        private ActivitiesRest;
        private UserRest;
        static $inject: string[];
        constructor($scope: any, ActivitiesRest: any, UserRest: any);
        initController(): void;
    }
}
