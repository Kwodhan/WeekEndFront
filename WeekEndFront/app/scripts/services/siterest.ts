/// <reference path="../app.ts" />
'use strict';


  module weekEndApp.Services {


    export class SitesRest {
      static $inject = ['$resource', 'urlWeekTest','$localStorage','UpdateSite'];
        urlBase :string = '/sites/';
      constructor (private $resource,private urlWeekTest,private $localStorage,private  UpdateSite) {

      }

      getSite(id) {
        var Site = this.$resource(this.urlWeekTest+this.urlBase+':id/', {id:'@id'}, {
          get: {
            method: 'GET',
            headers: { 'Authorization': (this.$localStorage.basic? this.$localStorage.basic : '') }
          }
        });
        var site = Site.get({id:id}).$promise.then(function(data) {

          return (data.toJSON());
        });
        return site;
      }

      getSites() {
        var Site = this.$resource(this.urlWeekTest+this.urlBase,{}, {
          get: {
            method: 'GET',
            headers: { 'Authorization': (this.$localStorage.basic? this.$localStorage.basic : '') }
          }
        });
        var sites = Site.get().$promise.then(function(data) {
          return (data.toJSON());
        });
        return sites;
      }

      postSite(site) {
        var Site = this.$resource(this.urlWeekTest+this.urlBase,{},
          {
            save: {
              method: 'POST',
              headers: { 'Authorization': (this.$localStorage.basic? this.$localStorage.basic : '') }
            }
          });
          var sites = Site.save({
            name:site.name,
            siteWeb:site.siteWeb,
            location:{id : site.locationid},
            activities:site.activities


          }).$promise.then(function(data) {
            return (data.toJSON());
          });
          return sites;
        }

        updateSite(site) {
          var site = this.UpdateSite.update(site.id,site.name,site.siteWeb,{id : site.location},  site.activities).$promise.then(function(data) {


            return (data.toJSON());
          });
          return site;
        }


    }
  }

  angular.module('weekEndApp')
  .service('SitesRest', weekEndApp.Services.SitesRest);
