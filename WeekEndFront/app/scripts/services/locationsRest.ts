/// <reference path="../app.ts" />
'use strict';

/**
* @ngdoc service
* @name weekEndApp.location
* @description
* # location
* Service in the weekEndApp.
*/
module weekEndApp.Services {


  export class LocationsRest {
    static $inject = ['$resource', 'urlWeekTest','$localStorage','UpdateSite'];
      urlBase :string = '/locations/';
    constructor (private $resource,private urlWeekTest,private $localStorage,private  UpdateSite) {

    }


getLocation(id) {
    var Location = this.$resource(this.urlWeekTest+this.urlBase+':id/', {id:'@id'}, {
      get: {
        method: 'GET',
        headers: { 'Authorization': (this.$localStorage.basic? this.$localStorage.basic : '') }
      }
    });
    var location = Location.get({id:id}).$promise.then(function(data) {
      return (data.toJSON());
    });
    return location.data[0];
  }

  getLocations() {
    var Location = this.$resource(this.urlWeekTest+this.urlBase,{}, {
      get: {
        method: 'GET',
        headers: { 'Authorization': (this.$localStorage.basic? this.$localStorage.basic : '') }
      }
    });
    var locations = Location.get().$promise.then(function(data) {
      return (data.toJSON());
    });

    return locations;
  }

  postLocation(marker) {
    var Location = this.$resource(this.urlWeekTest+this.urlBase,{},
      {
        save: {
          method: 'POST',
          headers: { 'Authorization': (this.$localStorage.basic? this.$localStorage.basic : '') }
        }
      });
      var locations = Location.save({
        city:marker.city,
        region:marker.region,
        latitude:marker.latitude,
        longitude:marker.longitude

      }).$promise.then(function(data) {
        return (data.toJSON());
      });
      return locations;
    }



  }
}

angular.module('weekEndApp')
.service('LocationsRest', weekEndApp.Services.LocationsRest);
