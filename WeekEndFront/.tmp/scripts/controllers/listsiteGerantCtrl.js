/// <reference path="../app.ts" />
'use strict';
/**
* @ngdoc function
* @name weekEndApp.controller:ListactivitiesCtrl
* @description
* # ListactivitiesCtrl
* Controller of the weekEndApp
*/
var weekEndApp;
(function (weekEndApp) {
    var Controllers;
    (function (Controllers) {
        var ListsitesGerantCtrl = (function () {
            function ListsitesGerantCtrl($scope, SitesRest) {
                this.$scope = $scope;
                this.SitesRest = SitesRest;
                this.initController();
            }
            ListsitesGerantCtrl.prototype.initController = function () {
                var _this = this;
                var promise = this.SitesRest.getSites();
                promise.then(function (data) {
                    _this.$scope.liste = data.data;
                });
                this.$scope.delete = function (element) {
                    _this.SitesRest.deleteSite(element.id);
                    var index = _this.$scope.liste.indexOf(element);
                    if (index > -1) {
                        _this.$scope.liste.splice(index, 1);
                    }
                };
            };
            ListsitesGerantCtrl.$inject = ['$scope', 'SitesRest'];
            return ListsitesGerantCtrl;
        })();
        Controllers.ListsitesGerantCtrl = ListsitesGerantCtrl;
    })(Controllers = weekEndApp.Controllers || (weekEndApp.Controllers = {}));
})(weekEndApp || (weekEndApp = {}));
angular.module('weekEndApp').controller('ListsitesGerantCtrl', weekEndApp.Controllers.ListsitesGerantCtrl);
