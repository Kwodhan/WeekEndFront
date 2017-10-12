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
.factory('UpdateUserActivity', ['$resource', 'urlWeekTest', '$localStorage',function ($resource,urlWeekTest, $localStorage) {


  return $resource(urlWeekTest+'/users/:idu/activities/:ida',{idu: '@idu',ida:'@ida'}, {
    update: {method:'PUT', params: {idu: '@idu',ida:'@ida'}, headers: { 'Authorization':($localStorage.currentUser? $localStorage.currentUser.basic : '')  }}}
  );


}]);

angular.module('weekEndApp')
.factory('UpdateUserLocation', ['$resource', 'urlWeekTest', '$localStorage',function ($resource,urlWeekTest, $localStorage) {


  return $resource(urlWeekTest+'/users/:idu/homes/:idl',{idu: '@idu',idl:'@idl'}, {
    update: {method:'PUT', params: {idu: '@idu',idl:'@idl'}, headers: { 'Authorization': ($localStorage.currentUser? $localStorage.currentUser.basic : '')  }}}
  );


}]);

/*
/// <reference path="../app.ts" />
'use strict';


module weekEndApp {


  export class UpdateUser {
    static $inject = ['$resource', 'urlWeekTest','$localStorage'];
    constructor (private $resource,private urlWeekTest,private $localStorage) {

    }

    updateActivity(){

      return this.$resource(this.urlWeekTest+'/sites',{id: '@id',name:'@name',location:'@location',activities:'@activities'}, {
        update: {method:'PUT', params: {id: '@id',name:'@name',location:'@location',activities:'@activities'}, headers: { 'Authorization': (this.$localStorage.currentUser? this.$localStorage.currentUser.basic : '')  }}
      });

    }

    UpdateLocation(){
      return this.$resource(this.urlWeekTest+'/users/:idu/homes/:idl',{idu: '@idu',idl:'@idl'}, {
        update: {method:'PUT', params: {idu: '@idu',idl:'@idl'}, headers: { 'Authorization': (this.$localStorage.currentUser? this.$localStorage.currentUser.basic : '')  }}}
      );
    }

  }
}

angular.module('weekEndApp')
.factory('UpdateUser', [weekEndApp]);
*/
