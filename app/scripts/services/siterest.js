'use strict';

/**
 * @ngdoc service
 * @name weekEndProjectApp.siteRest
 * @description
 * # siteRest
 * Service in the weekEndProjectApp.
 */
angular.module('weekEndProjectApp')
  .service('SiteRest',['$resource', 'urlWeekTest','Session',function ($resource,urlWeekTest,Session) {

  var urlBase = '/sites/';

  this.getSite = function (id) {
    var Site = $resource(urlWeekTest+urlBase+':id/', {id:'@id'}, {
    get: {
        method: 'GET',
        headers: { 'Authorization': Session.basic }
    }
});
    var site = Site.get({id:id}).$promise.then(function(data) {
      return (data.toJSON());
    });
    return site.data[0];
  };

  this.getSites = function () {
    var Site = $resource(urlWeekTest+urlBase,{}, {
    get: {
        method: 'GET',
        headers: { 'Authorization': Session.basic }
    }
});
    var sites = site.get().$promise.then(function(data) {
      return (data.toJSON());
    });
    return sites;
  };

  this.postSite = function (site) {
    var Site = $resource(urlWeekTest+urlBase,{},
     {
    save: {
        method: 'POST',
        headers: { 'Authorization': Session.basic }
    }
});
    var sites = Site.save({
      name:site.name,
      location:{id : site.locationid},
      activities:[{id : site.activityid}]


    }).$promise.then(function(data) {
      return (data.toJSON());
    });
    return sites;
  };



  }]);
