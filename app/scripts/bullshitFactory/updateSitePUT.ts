/// <reference path="../app.ts" />
'use strict';



module weekEndApp.Factory {


  export class UpdateSite {
  
    constructor (private $resource,private urlWeekTest,private $localStorage) {

    }

    update(id: number,name : string,location,activities){

      var Site = this.$resource(this.urlWeekTest+'/sites',{id: '@id',name:'@name',location:'@location',activities:'@activities'}, {
        update: {method:'PUT', params: {id: '@id',name:'@name',location:'@location',activities:'@activities'}, headers: { 'Authorization': (this.$localStorage.currentUser? this.$localStorage.currentUser.basic : '')  }}}
      );
      var site = Site.update({
        id :id,
        name:name,
        location:location,
        activities:activities


      });
      return site;
    }


  }
}

angular.module('weekEndApp')
.factory('UpdateSite',["$resource",'urlWeekTest' ,"$localStorage", ($resource,urlWeekTest ,$localStorage) => new weekEndApp.Factory.UpdateSite($resource, urlWeekTest,$localStorage)]);
