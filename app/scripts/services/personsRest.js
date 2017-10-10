'use strict';

/**
* @ngdoc service
* @name weekEndProjectApp.Person
* @description api for
* # Person
* Service in the weekEndProjectApp.
*/


angular.module('weekEndProjectApp')
.service('PersonsRest',['$resource', 'urlWeekTest',function ($resource,urlWeekTest) {

  var urlBase = '/users/';

  this.getPerson = function (id) {
    var Person = $resource(urlWeekTest+urlBase+':id/', {id:'@id'},{
      get: {
        method: 'GET',
        headers: { 'Authorization': Session.basic }
      }
    });
    var person = Person.get({id:id}).$promise.then(function(data) {
      return (data.toJSON());
    });
    return person.data[0];
  };


}]);
