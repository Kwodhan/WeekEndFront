/// <reference path="../app.ts" />
'use strict';

/**
* @ngdoc service
* @name weekEndApp.Activities
* @description
* # Activities
* Service in the weekEndApp.
*/
angular.module('weekEndApp')
.service('ActivitiesRest', ['$resource', 'urlWeekTest','Session',function ($resource,urlWeekTest,Session) {

  var urlBase = '/activities/';

  this.getActivity = function (id) {
    var Activity = $resource(urlWeekTest+urlBase+':id/', {id:'@id'},{
      get: {
        method: 'GET',
        headers: { 'Authorization': Session.basic }
      }
    });
    var activity = Activity.get({id:id}).$promise.then(function(data) {
      return (data.toJSON());
    });
    return activity.data[0];
  };

  this.getActivities = function () {
    var Activity = $resource(urlWeekTest+urlBase,{},{
      get: {
        method: 'GET',
        headers: { 'Authorization': Session.basic }
      }
    });
    var activities = Activity.get().$promise.then(function(data) {

      return (data.toJSON());
    });
    return activities;
  };


}]);
