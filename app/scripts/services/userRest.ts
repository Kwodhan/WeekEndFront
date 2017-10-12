/// <reference path="../app.ts" />
'use strict';

/**
* @ngdoc service
* @name weekEndApp.User
* @description
* # User
* Service in the weekEndApp.
*/
angular.module('weekEndApp')
.service('UserRest', ['$resource', 'urlWeekTest','$localStorage','UpdateUserActivity','UpdateUserLocation',
function ($resource,urlWeekTest,$localStorage,UpdateUserActivity,UpdateUserLocation) {
  var urlBase = '/users/';


  this.addActivity= function (id) {
    var person = UpdateUserActivity.update({ idu: $localStorage.currentUser.user.id , ida: id }).$promise.then(function(data) {

      $localStorage.currentUser=data.toJSON();

      return (data.toJSON());
    });
    return person;
  };

  this.removeActivity= function (id) {

    var Person = $resource(urlWeekTest+urlBase+$localStorage.currentUser.user.id+'/activities/'+id,{},{
      delete: {
        method: 'DELETE',
        headers: { 'Authorization': $localStorage.currentUser.basic }
      }
    });
    var person = Person.delete().$promise.then(function(data) {
      $localStorage.currentUser=data.toJSON();
      return (data.toJSON());
    });
    return person;
  };

  this.addHome= function (id) {
    var person = UpdateUserLocation.update({ idu: $localStorage.currentUser.user.id , idl: id }).$promise.then(function(data) {

    $localStorage.currentUser=data.toJSON();

      return (data.toJSON());
    });
    return person;
  };

  this.removeHome= function (id) {

    var Person = $resource(urlWeekTest+urlBase+$localStorage.currentUser.user.id+'/homes/'+id,{},{
      delete: {
        method: 'DELETE',
        headers: { 'Authorization': $localStorage.currentUser.basic }
      }
    });
    var person = Person.delete().$promise.then(function(data) {
      $localStorage.currentUser=data.toJSON();
      return (data.toJSON());
    });
    return person;
  };


}]);
