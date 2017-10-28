/// <reference path="../app.ts" />
'use strict';
/// <reference path="../app.ts" />
'use strict';
/**
* @ngdoc service
* @name weekEndApp.location
* @description
* # location
* Service in the weekEndApp.
*/
var weekEndApp;
(function (weekEndApp) {
    var Services;
    (function (Services) {
        var UserRest = (function () {
            function UserRest($resource, urlWeekTest, $localStorage, UpdateUser) {
                this.$resource = $resource;
                this.urlWeekTest = urlWeekTest;
                this.$localStorage = $localStorage;
                this.UpdateUser = UpdateUser;
                this.urlBase = '/users/';
            }
            UserRest.prototype.addActivity = function (id) {
                var person = this.UpdateUser.updateActivity(this.$localStorage.currentUser.id, id).$promise.then(function (data) {
                    return (data.toJSON());
                });
                return person;
            };
            UserRest.prototype.removeActivity = function (id) {
                var Person = this.$resource(this.urlWeekTest + this.urlBase + this.$localStorage.currentUser.id + '/activities/' + id, {}, {
                    delete: {
                        method: 'DELETE',
                        headers: { 'Authorization': this.$localStorage.basic }
                    }
                });
                var person = Person.delete().$promise.then(function (data) {
                    return (data.toJSON());
                });
                return person;
            };
            UserRest.prototype.addHome = function (id) {
                var person = this.UpdateUser.updateLocation(this.$localStorage.currentUser.id, id).$promise.then(function (data) {
                    return (data.toJSON());
                });
                return person;
            };
            UserRest.prototype.removeHome = function (id) {
                var Person = this.$resource(this.urlWeekTest + this.urlBase + this.$localStorage.currentUser.id + '/homes/' + id, {}, {
                    delete: {
                        method: 'DELETE',
                        headers: { 'Authorization': this.$localStorage.currentUser.basic }
                    }
                });
                var person = Person.delete().$promise.then(function (data) {
                    return (data.toJSON());
                });
                return person;
            };
            UserRest.$inject = ['$resource', 'urlWeekTest', '$localStorage', 'UpdateUser'];
            return UserRest;
        })();
        Services.UserRest = UserRest;
    })(Services = weekEndApp.Services || (weekEndApp.Services = {}));
})(weekEndApp || (weekEndApp = {}));
angular.module('weekEndApp')
    .service('UserRest', weekEndApp.Services.UserRest);
