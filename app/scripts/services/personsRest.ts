/// <reference path="../app.ts" />
'use strict';

/**
* @ngdoc service
* @name weekEndApp.Person
* @description api for
* # Person
* Service in the weekEndApp.
*/


angular.module('weekEndApp')
.service('PersonsRest',['$resource', 'urlWeekTest','$localStorage',function ($resource,urlWeekTest,$localStorage) {

  var urlBase = '/users/';

  this.getPerson = function (id) {
    var Person = $resource(urlWeekTest+urlBase+':id/', {id:'@id'},{
      get: {
        method: 'GET',
        headers: { 'Authorization': ($localStorage.currentUser? $localStorage.currentUser.basic : '') }
      }
    });
    var person = Person.get({id:id}).$promise.then(function(data) {
      return (data.toJSON());
    });
    return person.data[0];
  };


}]);
