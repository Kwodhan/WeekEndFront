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
        var LocationsRest = (function () {
            function LocationsRest($resource, urlWeekTest, $localStorage, UpdateSite) {
                this.$resource = $resource;
                this.urlWeekTest = urlWeekTest;
                this.$localStorage = $localStorage;
                this.UpdateSite = UpdateSite;
                this.urlBase = '/locations/';
            }
            LocationsRest.prototype.getLocation = function (id) {
                var Location = this.$resource(this.urlWeekTest + this.urlBase + ':id/', { id: '@id' }, {
                    get: {
                        method: 'GET',
                        headers: { 'Authorization': (this.$localStorage.basic ? this.$localStorage.basic : '') }
                    }
                });
                var location = Location.get({ id: id }).$promise.then(function (data) {
                    return (data.toJSON());
                });
                return location.data[0];
            };
            LocationsRest.prototype.getLocations = function () {
                var Location = this.$resource(this.urlWeekTest + this.urlBase, {}, {
                    get: {
                        method: 'GET',
                        headers: { 'Authorization': (this.$localStorage.basic ? this.$localStorage.basic : '') }
                    }
                });
                var locations = Location.get().$promise.then(function (data) {
                    return (data.toJSON());
                });
                return locations;
            };
            LocationsRest.prototype.postLocation = function (marker) {
                var Location = this.$resource(this.urlWeekTest + this.urlBase, {}, {
                    save: {
                        method: 'POST',
                        headers: { 'Authorization': (this.$localStorage.basic ? this.$localStorage.basic : '') }
                    }
                });
                var locations = Location.save({
                    city: marker.city,
                    region: marker.region,
                    latitude: marker.latitude,
                    longitude: marker.longitude
                }).$promise.then(function (data) {
                    return (data.toJSON());
                });
                return locations;
            };
            LocationsRest.$inject = ['$resource', 'urlWeekTest', '$localStorage', 'UpdateSite'];
            return LocationsRest;
        })();
        Services.LocationsRest = LocationsRest;
    })(Services = weekEndApp.Services || (weekEndApp.Services = {}));
})(weekEndApp || (weekEndApp = {}));
angular.module('weekEndApp')
    .service('LocationsRest', weekEndApp.Services.LocationsRest);
