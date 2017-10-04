'use strict';

/**
 * @ngdoc service
 * @name weekEndProjectApp.Person
 * @description api for
 * # Person
 * Service in the weekEndProjectApp.
 */


angular.module('weekEndProjectApp')
  .service('Person',['$resource', 'urlWeek',function ($resource,urlWeek) {

  var urlBase = '/persons/';

    this.getPerson = function (id) {
      console.log(urlBase);
      console.log(urlWeek);
      var Person = $resource(urlWeek+urlBase+':id/', {id:'@id'});
      var person = Person.get({id:id}).$promise.then(function(data) {
        return (data.toJSON());
      });
      return person;
    };


  }]);
