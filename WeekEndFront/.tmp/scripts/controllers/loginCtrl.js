/// <reference path="../app.ts" />
'use strict';
/**
* @ngdoc function
* @name weekEndApp.controller:LoginCtrl
* @description
* # LoginCtrl
* Controller of the weekEndApp
*/
var weekEndApp;
(function (weekEndApp) {
    var Controllers;
    (function (Controllers) {
        var LoginCtrl = (function () {
            function LoginCtrl($scope, $rootScope, AUTH_EVENTS, AuthService, $location, $route) {
                this.$scope = $scope;
                this.$rootScope = $rootScope;
                this.AUTH_EVENTS = AUTH_EVENTS;
                this.AuthService = AuthService;
                this.$location = $location;
                this.$route = $route;
                this.initController();
            }
            LoginCtrl.prototype.initController = function () {
                var _this = this;
                this.$scope.credentials = {
                    pseudo: '',
                    password: ''
                };
                this.$scope.login = function (credentials) {
                    if (!(credentials.pseudo && credentials.password)) {
                        _this.$scope.errors = "A problem occurred";
                        return;
                    }
                    _this.AuthService.login(credentials).then(function (user) {
                        if (user) {
                            _this.$rootScope.$broadcast(_this.AUTH_EVENTS.loginSuccess);
                            _this.$scope.setCurrentUser(user);
                        }
                        else {
                            _this.$scope.errors = "Bad login or password";
                        }
                    });
                };
                this.$scope.logout = function () {
                    //this.$rootScope.$broadcast(this.AUTH_EVENTS.logoutSuccess);
                    _this.AuthService.logout();
                    _this.$scope.credentials = null;
                    _this.$scope.setCurrentUser(null);
                    _this.$scope.errors = null;
                    _this.$location.path('/');
                };
            };
            LoginCtrl.$inject = ['$scope', '$rootScope', 'AUTH_EVENTS', 'AuthService', '$location', "$route"];
            return LoginCtrl;
        })();
        Controllers.LoginCtrl = LoginCtrl;
    })(Controllers = weekEndApp.Controllers || (weekEndApp.Controllers = {}));
})(weekEndApp || (weekEndApp = {}));
angular.module('weekEndApp').controller('LoginCtrl', weekEndApp.Controllers.LoginCtrl);
