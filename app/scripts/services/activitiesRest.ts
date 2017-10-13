/// <reference path="../app.ts" />
'use strict';

module weekEndApp.Services {


  export class ActivitiesRest {
    static $inject = ['$resource', 'urlWeekTest','$localStorage'];
    urlBase :string = '/activities/';
    constructor (private $resource,private urlWeekTest,private $localStorage) {

    }


    getActivity(id) {
      var Activity = this.$resource(this.urlWeekTest+this.urlBase+':id/', {id:'@id'},{
        get: {
          method: 'GET',
          headers: { 'Authorization': (this.$localStorage.basic ? this.$localStorage.basic : '') }
        }
      });
      var activity = Activity.get({id:id}).$promise.then((data) =>{
        return (data.toJSON());
      });
      return activity.data[0];
    };

    getActivities() {
      var Activity = this.$resource(this.urlWeekTest+this.urlBase,{},{
        get: {
          method: 'GET',
          headers: { 'Authorization': (this.$localStorage.basic ? this.$localStorage.basic : '')  }
        }
      });
      var activities = Activity.get().$promise.then((data)=> {

        return (data.toJSON());
      });

      return activities;
    };

  }
}

angular.module('weekEndApp')
.service('ActivitiesRest', weekEndApp.Services.ActivitiesRest);
