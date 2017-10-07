'use strict';

/**
 * @ngdoc service
 * @name weekEndProjectApp.UserUpdate
 * @description
 * # UserUpdate
 * Factory in the weekEndProjectApp.
 */
angular.module('weekEndProjectApp')
  .factory('UpdateLocation', ['$resource', 'urlWeekTest','Session',function ($resource,urlWeekTest,Session) {


    return $resource(urlWeekTest+'/users/:idu/activities/:ida',{idu: '@idu',ida:'@ida'}, {
  update: {method:'PUT', params: {idu: '@idu',ida:'@ida'}, headers: { 'Authorization': Session.basic }}}
  );


  }]);
