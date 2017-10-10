/// <reference path="../app.ts" />
'use strict';

/**
* @ngdoc service
* @name weekEndApp.UserUpdate
* @description
* # UserUpdate
* Factory in the weekEndApp.
*	private Set<Activity> activities = new HashSet<Activity>();
private Location location;
private String name;
*/
angular.module('weekEndApp')
.factory('UpdateSite', ['$resource', 'urlWeekTest','Session',function ($resource,urlWeekTest,Session) {


  return $resource(urlWeekTest+'/sites',{id: '@id',name:'@name',location:'@location',activities:'@activities'}, {
    update: {method:'PUT', params: {id: '@id',name:'@name',location:'@location',activities:'@activities'}, headers: { 'Authorization': Session.basic }}}
  );


}]);
