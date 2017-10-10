/// <reference path="../app.ts" />
'use strict';

/**
* @ngdoc service
* @name weekEndApp.UserUpdate
* @description
* # UserUpdate
* Factory in the weekEndApp.
*/
angular.module('weekEndApp')
.factory('UpdateUserActivity', ['$resource', 'urlWeekTest','Session',function ($resource,urlWeekTest,Session) {


  return $resource(urlWeekTest+'/users/:idu/activities/:ida',{idu: '@idu',ida:'@ida'}, {
    update: {method:'PUT', params: {idu: '@idu',ida:'@ida'}, headers: { 'Authorization': Session.basic }}}
  );


}]);

angular.module('weekEndApp')
.factory('UpdateUserLocation', ['$resource', 'urlWeekTest','Session',function ($resource,urlWeekTest,Session) {


  return $resource(urlWeekTest+'/users/:idu/homes/:idl',{idu: '@idu',idl:'@idl'}, {
    update: {method:'PUT', params: {idu: '@idu',idl:'@idl'}, headers: { 'Authorization': Session.basic }}}
  );


}]);
