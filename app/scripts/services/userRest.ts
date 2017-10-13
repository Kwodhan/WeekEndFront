/// <reference path="../app.ts" />
'use strict';

/// <reference path="../app.ts" />
'use strict';

/**
* @ngdoc service
* @name weekEndApp.location
* @description
* # location
* Service in the weekEndApp.
*/
module weekEndApp.Services {


  export class UserRest {
    static $inject = ['$resource', 'urlWeekTest','$localStorage','UpdateUser'];
    urlBase :string = '/users/';
    constructor (private $resource,private urlWeekTest,private $localStorage,private  UpdateUser) {

    }



    addActivity(id) {
      var person = this.UpdateUser.updateActivity(this.$localStorage.currentUser.id ,  id ).$promise.then(function(data) {



        return (data.toJSON());
      });
      return person;
    }

    removeActivity(id) {

      var Person = this.$resource(this.urlWeekTest+this.urlBase+this.$localStorage.currentUser.id+'/activities/'+id,{},{
        delete: {
          method: 'DELETE',
          headers: { 'Authorization': this.$localStorage.basic }
        }
      });
      var person = Person.delete().$promise.then(function(data) {

        return (data.toJSON());
      });
      return person;
    }

    addHome(id) {
      var person = this.UpdateUser.updateLocation(this.$localStorage.currentUser.id , id ).$promise.then(function(data) {


        return (data.toJSON());
      });
      return person;
    }

    removeHome(id) {

      var Person = this.$resource(this.urlWeekTest+this.urlBase+this.$localStorage.currentUser.id+'/homes/'+id,{},{
        delete: {
          method: 'DELETE',
          headers: { 'Authorization': this.$localStorage.currentUser.basic }
        }
      });
      var person = Person.delete().$promise.then(function(data) {

        return (data.toJSON());
      });
      return person;
    }
  }
}
angular.module('weekEndApp')
.service('UserRest', weekEndApp.Services.UserRest);
