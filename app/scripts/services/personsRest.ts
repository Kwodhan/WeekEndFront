/// <reference path="../app.ts" />
'use strict';

/**
* @ngdoc service
* @name weekEndApp.Person
* @description api for
* # Person
* Service in the weekEndApp.
*/

module weekEndApp.Services {


  export class PersonsRest {
    static $inject = ['$resource', 'urlWeekTest','$localStorage'];
    urlBase :string = '/users/';
    constructor (private $resource,private urlWeekTest,private $localStorage) {

    }



    getPerson (id) {
      var Person = this.$resource(this.urlWeekTest+this.urlBase+':id/', {id:'@id'},{
        get: {
          method: 'GET',
          headers: { 'Authorization': (this.$localStorage.basic? this.$localStorage.basic : '') }
        }
      });
      var person = Person.get({id:id}).$promise.then(function(data) {
        return (data.toJSON());
      });
      return person.data[0];
    };


  }
}

angular.module('weekEndApp')
.service('PersonsRest', weekEndApp.Services.PersonsRest);
