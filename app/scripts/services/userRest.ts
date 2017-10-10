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
.service('UserRest', ['$resource', 'urlWeekTest','Session','UpdateUserActivity','UpdateUserLocation',
function ($resource,urlWeekTest,Session,UpdateUserActivity,UpdateUserLocation) {
  var urlBase = '/users/';


  this.addActivity= function (id) {
    var person = UpdateUserActivity.update({ idu: Session.user.id , ida: id }).$promise.then(function(data) {

      Session.user=data.toJSON();

      return (data.toJSON());
    });
    return person;
  };

  this.removeActivity= function (id) {

    var Person = $resource(urlWeekTest+urlBase+Session.user.id+'/activities/'+id,{},{
      delete: {
        method: 'DELETE',
        headers: { 'Authorization': Session.basic }
      }
    });
    var person = Person.delete().$promise.then(function(data) {
      Session.user=data.toJSON();
      return (data.toJSON());
    });
    return person;
  };

  this.addHome= function (id) {
    var person = UpdateUserLocation.update({ idu: Session.user.id , idl: id }).$promise.then(function(data) {

      Session.user=data.toJSON();

      return (data.toJSON());
    });
    return person;
  };

  this.removeHome= function (id) {

    var Person = $resource(urlWeekTest+urlBase+Session.user.id+'/homes/'+id,{},{
      delete: {
        method: 'DELETE',
        headers: { 'Authorization': Session.basic }
      }
    });
    var person = Person.delete().$promise.then(function(data) {
      Session.user=data.toJSON();
      return (data.toJSON());
    });
    return person;
  };


}]);
