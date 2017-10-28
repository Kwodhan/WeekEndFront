/// <reference path="../app.ts" />
'use strict';
var weekEndApp;
(function (weekEndApp) {
    var Factory;
    (function (Factory) {
        var AuthService = (function () {
            function AuthService($resource, urlWeekTest, $localStorage, USER_ROLES) {
                this.$resource = $resource;
                this.urlWeekTest = urlWeekTest;
                this.$localStorage = $localStorage;
                this.USER_ROLES = USER_ROLES;
                this.urlBase = '/auth/';
            }
            AuthService.prototype.registration = function (credentials) {
                var basic = "Basic " + btoa(credentials.pseudo + ':' + credentials.password);
                this.$localStorage.basic = basic;
                var User = this.$resource(this.urlWeekTest + this.urlBase + 'registration', {}, {
                    save: {
                        method: 'POST',
                    }
                });
                var user = User.save(credentials).$promise.then(function (data) {
                    return (data.toJSON());
                }, function (data) {
                    null;
                });
                return user;
            };
            AuthService.prototype.login = function (credentials) {
                var basic = "Basic " + btoa(credentials.pseudo + ':' + credentials.password);
                this.$localStorage.basic = basic;
                var User = this.$resource(this.urlWeekTest + this.urlBase + 'login', {}, {
                    save: {
                        method: 'POST',
                    }
                });
                var user = User.save(credentials).$promise.then(function (data) {
                    return (data.toJSON());
                }, function (data) {
                    null;
                });
                return user;
            };
            AuthService.prototype.logout = function () {
                delete this.$localStorage.currentUser;
                delete this.$localStorage.basic;
                this.$localStorage.role = this.USER_ROLES.guest;
            };
            AuthService.prototype.isAuthorized = function (authorizedRoles) {
                if (!angular.isArray(authorizedRoles)) {
                    authorizedRoles = [authorizedRoles];
                }
                return (authorizedRoles.indexOf(this.$localStorage.role) !== -1);
            };
            return AuthService;
        })();
        Factory.AuthService = AuthService;
    })(Factory = weekEndApp.Factory || (weekEndApp.Factory = {}));
})(weekEndApp || (weekEndApp = {}));
angular.module('weekEndApp')
    .factory('AuthService', ["$resource", 'urlWeekTest', "$localStorage", "USER_ROLES", function ($resource, urlWeekTest, $localStorage, USER_ROLES) { return new weekEndApp.Factory.AuthService($resource, urlWeekTest, $localStorage, USER_ROLES); }]);
