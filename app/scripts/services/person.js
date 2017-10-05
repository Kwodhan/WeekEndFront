'use strict';

/**
 * @ngdoc service
 * @name weekEndProjectApp.Person
 * @description api for
 * # Person
 * Service in the weekEndProjectApp.
 */


angular.module('weekEndProjectApp')
  .service('Person',['$resource', 'urlWeekTest',function ($resource,urlWeekTest) {

  var urlBase = '/users/';

    this.getPerson = function (id) {
      console.log(urlBase);
      console.log(urlWeekTest);
      var Person = $resource(urlWeekTest+urlBase+':id/', {id:'@id'});
      var person = Person.get({id:id}).$promise.then(function(data) {
        return (data.toJSON());
      });
      return person;
    };


  }]);
