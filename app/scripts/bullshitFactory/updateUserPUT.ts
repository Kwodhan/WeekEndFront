
/// <reference path="../app.ts" />
'use strict';


module weekEndApp.Factory {


  export class UpdateUser {
  
    constructor (private $resource,private urlWeekTest,private $localStorage) {

    }

    updateActivity(idu: number,ida:number){

      var User  = this.$resource(this.urlWeekTest+'/users/:idu/activities/:ida',{idu: '@idu',ida:'@ida'}, {
        update: {method:'PUT', params: {idu: '@idu',ida:'@ida'}, headers: { 'Authorization': (this.$localStorage.currentUser? this.$localStorage.currentUser.basic : '')  }}}
      );
      var user = User.update({
        idu :idu,
        ida :ida
      });
      return user;

    }

    updateLocation(idu: number,idl:number){
      var User  = this.$resource(this.urlWeekTest+'/users/:idu/homes/:idl',{idu: '@idu',idl:'@idl'}, {
        update: {method:'PUT', params: {idu: '@idu',idl:'@idl'}, headers: { 'Authorization': (this.$localStorage.currentUser? this.$localStorage.currentUser.basic : '')  }}}
      );
      var user = User.update({
        idu :idu,
        idl :idl
      });
      return user;
    }

  }
}


angular.module('weekEndApp')
.factory('UpdateUser',["$resource",'urlWeekTest' ,"$localStorage", ($resource,urlWeekTest ,$localStorage) => new weekEndApp.Factory.UpdateUser($resource, urlWeekTest,$localStorage)]);
