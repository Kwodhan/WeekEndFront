/// <reference path="../app.ts" />
'use strict';
var weekEndApp;
(function (weekEndApp) {
    var Services;
    (function (Services) {
        var ActivitiesRest = (function () {
            function ActivitiesRest($resource, urlWeekTest, $localStorage) {
                this.$resource = $resource;
                this.urlWeekTest = urlWeekTest;
                this.$localStorage = $localStorage;
                this.urlBase = '/activities/';
            }
            ActivitiesRest.prototype.getActivity = function (id) {
                var Activity = this.$resource(this.urlWeekTest + this.urlBase + ':id/', { id: '@id' }, {
                    get: {
                        method: 'GET',
                        headers: { 'Authorization': (this.$localStorage.basic ? this.$localStorage.basic : '') }
                    }
                });
                var activity = Activity.get({ id: id }).$promise.then(function (data) {
                    return (data.toJSON());
                });
                return activity.data[0];
            };
            ;
            ActivitiesRest.prototype.getActivities = function () {
                var Activity = this.$resource(this.urlWeekTest + this.urlBase, {}, {
                    get: {
                        method: 'GET',
                        headers: { 'Authorization': (this.$localStorage.basic ? this.$localStorage.basic : '') }
                    }
                });
                var activities = Activity.get().$promise.then(function (data) {
                    return (data.toJSON());
                });
                return activities;
            };
            ;
            ActivitiesRest.$inject = ['$resource', 'urlWeekTest', '$localStorage'];
            return ActivitiesRest;
        })();
        Services.ActivitiesRest = ActivitiesRest;
    })(Services = weekEndApp.Services || (weekEndApp.Services = {}));
})(weekEndApp || (weekEndApp = {}));
angular.module('weekEndApp')
    .service('ActivitiesRest', weekEndApp.Services.ActivitiesRest);
