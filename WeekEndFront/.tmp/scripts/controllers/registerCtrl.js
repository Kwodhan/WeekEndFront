/// <reference path="../app.ts" />
'use strict';
var weekEndApp;
(function (weekEndApp) {
    var Controllers;
    (function (Controllers) {
        var RegisterCtrl = (function () {
            function RegisterCtrl($scope, $rootScope, $location, AUTH_EVENTS, AuthService) {
                this.$scope = $scope;
                this.$rootScope = $rootScope;
                this.$location = $location;
                this.AUTH_EVENTS = AUTH_EVENTS;
                this.AuthService = AuthService;
                this.initController();
            }
            RegisterCtrl.prototype.initController = function () {
                var _this = this;
                this.$scope.credentials = {
                    pseudo: '',
                    password: '',
                    emailAddress: ''
                };
                this.$scope.register = function (credentials) {
                    if (!(credentials.pseudo && credentials.password && credentials.emailAddress)) {
                        _this.$scope.errors = "A problem occurred";
                        return;
                    }
                    _this.AuthService.registration(credentials).then(function (user) {
                        if (user) {
                            _this.$rootScope.$broadcast(_this.AUTH_EVENTS.loginSuccess);
                            _this.$scope.setCurrentUser(user);
                            _this.$location.path('/');
                        }
                        else {
                            _this.$scope.errors = "That Pseudo is already taken";
                        }
                    });
                };
            };
            RegisterCtrl.$inject = ['$scope', '$rootScope', '$location', 'AUTH_EVENTS', 'AuthService'];
            return RegisterCtrl;
        })();
        Controllers.RegisterCtrl = RegisterCtrl;
    })(Controllers = weekEndApp.Controllers || (weekEndApp.Controllers = {}));
})(weekEndApp || (weekEndApp = {}));
angular.module('weekEndApp').controller('RegisterCtrl', weekEndApp.Controllers.RegisterCtrl);
