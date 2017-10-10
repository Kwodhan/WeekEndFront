/// <reference path="../app.ts" />
'use strict';

/**
* @ngdoc service
* @name weekEndApp.siteRest
* @description
* # siteRest
* Service in the weekEndApp.
*/
angular.module('weekEndApp')
.service('SitesRest',['$resource', 'urlWeekTest','Session','UpdateSite',function ($resource,urlWeekTest,Session,UpdateSite) {

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
    return site;
  };

  this.getSites = function () {
    var Site = $resource(urlWeekTest+urlBase,{}, {
      get: {
        method: 'GET',
        headers: { 'Authorization': Session.basic }
      }
    });
    var sites = Site.get().$promise.then(function(data) {
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
        activities:site.activities


      }).$promise.then(function(data) {
        return (data.toJSON());
      });
      return sites;
    };

    this.updateSite= function (site) {
      var site = UpdateSite.update({
        id:site.id,
        name:site.name,
        location:{id : site.location},
        activities:site.activities


      }).$promise.then(function(data) {


        return (data.toJSON());
      });
      return site;
    };



  }]);
