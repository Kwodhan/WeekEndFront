/// <reference path="../app.ts" />
'use strict';

module weekEndApp.Factory {


  export class AuthService {
  
    urlBase :string = '/auth/';
    constructor (private $resource,private urlWeekTest,private $localStorage) {

    }



    registration(credentials) {
      var basic ="Basic "+ btoa(credentials.pseudo+':'+credentials.password);
      this.$localStorage.basic= basic;
      var User = this.$resource(this.urlWeekTest+this.urlBase+'registration',{},
      {
        save: {
          method: 'POST',

        }
      });
      var user = User.save(credentials).$promise.then(function(data) {
        return (data.toJSON());
      },function(data) {
        null;
      });
      return user;


    }

    login(credentials) {
      var basic ="Basic "+ btoa(credentials.pseudo+':'+credentials.password);
      this.$localStorage.basic= basic;
      var User = this.$resource(this.urlWeekTest+this.urlBase+'login',{},
      {
        save: {
          method: 'POST',

        }
      });
      var user = User.save(credentials).$promise.then(function(data) {
        return (data.toJSON());
      },function(data) {
        null;
      });
      return user;

    }

    logout() {

      delete this.$localStorage.currentUser;

    }

    isAuthenticated() {
      return !!this.$localStorage.currentUser;
    }

    isAuthorized(authorizedRoles) {
      if (!angular.isArray(authorizedRoles)) {
        authorizedRoles = [authorizedRoles];
      }
      return (this.isAuthenticated() &&
      authorizedRoles.indexOf(this.$localStorage.currentUser.role[0]) !== -1);
    }

  }
}


angular.module('weekEndApp')
.factory('AuthService',["$resource",'urlWeekTest' ,"$localStorage", ($resource,urlWeekTest ,$localStorage) => new weekEndApp.Factory.AuthService($resource, urlWeekTest,$localStorage)]);
