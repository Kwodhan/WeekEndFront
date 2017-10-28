/// <reference path="../app.ts" />
'use strict';
var weekEndApp;
(function (weekEndApp) {
    var Controllers;
    (function (Controllers) {
        var ApplicationCtrl = (function () {
            function ApplicationCtrl($scope, USER_ROLES, AuthService, $localStorage) {
                this.$scope = $scope;
                this.USER_ROLES = USER_ROLES;
                this.AuthService = AuthService;
                this.$localStorage = $localStorage;
                this.initController();
            }
            ApplicationCtrl.prototype.initController = function () {
                var _this = this;
                if (this.$localStorage.currentUser) {
                    this.$scope.currentUser = this.$localStorage.currentUser;
                    this.$scope.userRoles = this.USER_ROLES;
                    this.$localStorage.role = this.$localStorage.currentUser.roles[0];
                }
                else {
                    this.$scope.currentUser = null;
                    this.$scope.userRoles = this.USER_ROLES;
                    this.$localStorage.role = this.USER_ROLES.guest;
                }
                this.$scope.isAuthorized = function (authorizedRoles) { return _this.AuthService.isAuthorized(authorizedRoles); };
                this.$scope.setCurrentUser = function (user) {
                    if (user == null) {
                        _this.$scope.currentUser = null;
                    }
                    else {
                        _this.$localStorage.role = user.roles[0];
                        _this.$localStorage.currentUser = user;
                        _this.$scope.currentUser = user;
                    }
                };
            };
            ApplicationCtrl.$inject = ['$scope', 'USER_ROLES', 'AuthService', '$localStorage'];
            return ApplicationCtrl;
        })();
        Controllers.ApplicationCtrl = ApplicationCtrl;
    })(Controllers = weekEndApp.Controllers || (weekEndApp.Controllers = {}));
})(weekEndApp || (weekEndApp = {}));
angular.module('weekEndApp').controller('ApplicationCtrl', weekEndApp.Controllers.ApplicationCtrl);
