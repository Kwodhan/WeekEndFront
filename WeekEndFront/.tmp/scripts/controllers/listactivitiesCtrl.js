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
        var ListActivitiesCtrl = (function () {
            function ListActivitiesCtrl($scope, ActivitiesRest, UserRest) {
                this.$scope = $scope;
                this.ActivitiesRest = ActivitiesRest;
                this.UserRest = UserRest;
                this.initController();
            }
            ListActivitiesCtrl.prototype.initController = function () {
                var _this = this;
                var promise = this.ActivitiesRest.getActivities();
                promise.then(function (data) {
                    _this.$scope.liste = data.data;
                });
                this.$scope.isActivities = function (id) {
                    for (var _i = 0, _a = _this.$scope.currentUser.activities; _i < _a.length; _i++) {
                        var activity = _a[_i];
                        if (activity.id === id) {
                            return true;
                        }
                    }
                    return false;
                };
                this.$scope.ajouter = function (id) {
                    var promise = _this.UserRest.addActivity(id);
                    promise.then(function (data) {
                        _this.$scope.setCurrentUser(data);
                    });
                };
                this.$scope.enlever = function (id) {
                    var promise = _this.UserRest.removeActivity(id);
                    promise.then(function (data) {
                        _this.$scope.setCurrentUser(data);
                    });
                };
            };
            ListActivitiesCtrl.$inject = ['$scope', 'ActivitiesRest', 'UserRest'];
            return ListActivitiesCtrl;
        })();
        Controllers.ListActivitiesCtrl = ListActivitiesCtrl;
    })(Controllers = weekEndApp.Controllers || (weekEndApp.Controllers = {}));
})(weekEndApp || (weekEndApp = {}));
angular.module('weekEndApp').controller('ListActivitiesCtrl', weekEndApp.Controllers.ListActivitiesCtrl);
