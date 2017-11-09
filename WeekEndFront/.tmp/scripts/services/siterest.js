/// <reference path="../app.ts" />
'use strict';
var weekEndApp;
(function (weekEndApp) {
    var Services;
    (function (Services) {
        var SitesRest = (function () {
            function SitesRest($resource, urlWeekTest, $localStorage, UpdateSite) {
                this.$resource = $resource;
                this.urlWeekTest = urlWeekTest;
                this.$localStorage = $localStorage;
                this.UpdateSite = UpdateSite;
                this.urlBase = '/sites/';
            }
            SitesRest.prototype.getSite = function (id) {
                var Site = this.$resource(this.urlWeekTest + this.urlBase + ':id/', { id: '@id' }, {
                    get: {
                        method: 'GET',
                        headers: { 'Authorization': (this.$localStorage.basic ? this.$localStorage.basic : '') }
                    }
                });
                var site = Site.get({ id: id }).$promise.then(function (data) {
                    return (data.toJSON());
                }, function (data) {
                    null;
                });
                return site;
            };
            SitesRest.prototype.deleteSite = function (id) {
                var Site = this.$resource(this.urlWeekTest + this.urlBase + ':id/', { id: '@id' }, {
                    delete: {
                        method: 'DELETE',
                        headers: { 'Authorization': (this.$localStorage.basic ? this.$localStorage.basic : '') }
                    }
                });
                Site.delete({ id: id });
            };
            SitesRest.prototype.getSites = function () {
                var Site = this.$resource(this.urlWeekTest + this.urlBase, {}, {
                    get: {
                        method: 'GET',
                        headers: { 'Authorization': (this.$localStorage.basic ? this.$localStorage.basic : '') }
                    }
                });
                var sites = Site.get().$promise.then(function (data) {
                    return (data.toJSON());
                });
                return sites;
            };
            SitesRest.prototype.postSite = function (site) {
                var Site = this.$resource(this.urlWeekTest + this.urlBase, {}, {
                    save: {
                        method: 'POST',
                        headers: { 'Authorization': (this.$localStorage.basic ? this.$localStorage.basic : '') }
                    }
                });
                var sites = Site.save({
                    name: site.name,
                    siteWeb: site.siteWeb,
                    location: { id: site.locationid },
                    activities: site.activities
                }).$promise.then(function (data) {
                    return (data.toJSON());
                });
                return sites;
            };
            SitesRest.prototype.updateSite = function (site) {
                var site = this.UpdateSite.update(site.id, site.name, site.siteWeb, { id: site.location }, site.activities).$promise.then(function (data) {
                    return (data.toJSON());
                });
                return site;
            };
            SitesRest.$inject = ['$resource', 'urlWeekTest', '$localStorage', 'UpdateSite'];
            return SitesRest;
        })();
        Services.SitesRest = SitesRest;
    })(Services = weekEndApp.Services || (weekEndApp.Services = {}));
})(weekEndApp || (weekEndApp = {}));
angular.module('weekEndApp')
    .service('SitesRest', weekEndApp.Services.SitesRest);
