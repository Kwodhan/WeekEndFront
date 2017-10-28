/// <reference path="../app.ts" />
'use strict';
var weekEndApp;
(function (weekEndApp) {
    var Factory;
    (function (Factory) {
        var UpdateSite = (function () {
            function UpdateSite($resource, urlWeekTest, $localStorage) {
                this.$resource = $resource;
                this.urlWeekTest = urlWeekTest;
                this.$localStorage = $localStorage;
            }
            UpdateSite.prototype.update = function (id, name, siteWeb, location, activities) {
                var Site = this.$resource(this.urlWeekTest + '/sites', { id: '@id', name: '@name', location: '@location', activities: '@activities' }, {
                    update: { method: 'PUT', params: { id: '@id', name: '@name', location: '@location', activities: '@activities' }, headers: { 'Authorization': (this.$localStorage.currentUser ? this.$localStorage.currentUser.basic : '') } } });
                var site = Site.update({
                    id: id,
                    name: name,
                    siteWeb: siteWeb,
                    location: location,
                    activities: activities
                });
                return site;
            };
            return UpdateSite;
        })();
        Factory.UpdateSite = UpdateSite;
    })(Factory = weekEndApp.Factory || (weekEndApp.Factory = {}));
})(weekEndApp || (weekEndApp = {}));
angular.module('weekEndApp')
    .factory('UpdateSite', ["$resource", 'urlWeekTest', "$localStorage", function ($resource, urlWeekTest, $localStorage) { return new weekEndApp.Factory.UpdateSite($resource, urlWeekTest, $localStorage); }]);
