'use strict';

/**
* @ngdoc service
* @name weekEndProjectApp.location
* @description
* # location
* Service in the weekEndProjectApp.
*/
angular.module('weekEndProjectApp')
.service('LocationsRest',['$resource', 'urlWeekTest','Session',function ($resource,urlWeekTest,Session) {

  var urlBase = '/locations/';

  this.getLocation = function (id) {
    var Location = $resource(urlWeekTest+urlBase+':id/', {id:'@id'}, {
      get: {
        method: 'GET',
        headers: { 'Authorization': Session.basic }
      }
    });
    var location = Location.get({id:id}).$promise.then(function(data) {
      return (data.toJSON());
    });
    return location.data[0];
  };

  this.getLocations = function () {
    var Location = $resource(urlWeekTest+urlBase,{}, {
      get: {
        method: 'GET',
        headers: { 'Authorization': Session.basic }
      }
    });
    var locations = Location.get().$promise.then(function(data) {
      return (data.toJSON());
    });
    return locations;
  };

  this.postLocation = function (marker) {
    var Location = $resource(urlWeekTest+urlBase,{},
      {
        save: {
          method: 'POST',
          headers: { 'Authorization': Session.basic }
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
    };



  }]);
