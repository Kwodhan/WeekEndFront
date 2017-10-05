'use strict';

/**
 * @ngdoc service
 * @name weekEndProjectApp.location
 * @description
 * # location
 * Service in the weekEndProjectApp.
 */
angular.module('weekEndProjectApp')
  .service('Location',['$resource', 'urlWeekTest',function ($resource,urlWeekTest) {

  var urlBase = '/locations/';

    this.getLocation = function (id) {
      console.log(urlBase);
      console.log(urlWeekTest);
      var Location = $resource(urlWeekTest+urlBase+':id/', {id:'@id'});
      var location = Location.get({id:id}).$promise.then(function(data) {
        return (data.toJSON());
      });
      return location;
    };


  }]);
