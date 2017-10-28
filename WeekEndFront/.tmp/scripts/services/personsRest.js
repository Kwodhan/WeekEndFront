/// <reference path="../app.ts" />
'use strict';
/**
* @ngdoc service
* @name weekEndApp.Person
* @description api for
* # Person
* Service in the weekEndApp.
*/
var weekEndApp;
(function (weekEndApp) {
    var Services;
    (function (Services) {
        var PersonsRest = (function () {
            function PersonsRest($resource, urlWeekTest, $localStorage) {
                this.$resource = $resource;
                this.urlWeekTest = urlWeekTest;
                this.$localStorage = $localStorage;
                this.urlBase = '/users/';
            }
            PersonsRest.prototype.getPerson = function (id) {
                var Person = this.$resource(this.urlWeekTest + this.urlBase + ':id/', { id: '@id' }, {
                    get: {
                        method: 'GET',
                        headers: { 'Authorization': (this.$localStorage.basic ? this.$localStorage.basic : '') }
                    }
                });
                var person = Person.get({ id: id }).$promise.then(function (data) {
                    return (data.toJSON());
                });
                return person.data[0];
            };
            ;
            PersonsRest.$inject = ['$resource', 'urlWeekTest', '$localStorage'];
            return PersonsRest;
        })();
        Services.PersonsRest = PersonsRest;
    })(Services = weekEndApp.Services || (weekEndApp.Services = {}));
})(weekEndApp || (weekEndApp = {}));
angular.module('weekEndApp')
    .service('PersonsRest', weekEndApp.Services.PersonsRest);
