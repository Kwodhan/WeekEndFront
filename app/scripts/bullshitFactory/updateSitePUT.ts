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
.factory('UpdateSite', ['$resource', 'urlWeekTest','$localStorage',function ($resource,urlWeekTest,$localStorage) {


  return $resource(urlWeekTest+'/sites',{id: '@id',name:'@name',location:'@location',activities:'@activities'}, {
    update: {method:'PUT', params: {id: '@id',name:'@name',location:'@location',activities:'@activities'}, headers: { 'Authorization': ($localStorage.currentUser? $localStorage.currentUser.basic : '')  }}}
  );


}]);
/*
/// <reference path="../app.ts" />
'use strict';



module weekEndApp {


  export class UpdateSite {
    static $inject = ['$resource', 'urlWeekTest','$localStorage'];
    constructor (private $resource,private urlWeekTest,private $localStorage) {

    }

    updateSite(id: number,name : string,location,activities){

      return this.$resource(this.urlWeekTest+'/sites',{id: id,name:name,location:location,activities:activities}, {
        update: {method:'PUT', params: {id: id,name:name,location:location,activities:activities}, headers: { 'Authorization': (this.$localStorage.currentUser? this.$localStorage.currentUser.basic : '')  }}
      });

    }

  }
}

angular.module('weekEndApp')
.factory('UpdateSite', [weekEndApp]);
*/
