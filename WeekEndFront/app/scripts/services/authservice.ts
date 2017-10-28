/// <reference path="../app.ts" />
'use strict';

module weekEndApp.Factory {


  export class AuthService {

    urlBase :string = '/auth/';
    constructor (private $resource,private urlWeekTest,private $localStorage,private USER_ROLES) {

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
      delete this.$localStorage.basic;
      this.$localStorage.role = this.USER_ROLES.guest;

    }



    isAuthorized(authorizedRoles) {
      if (!angular.isArray(authorizedRoles)) {

        authorizedRoles = [authorizedRoles];
      }
      return (authorizedRoles.indexOf(this.$localStorage.role) !== -1);
    }

  }
}


angular.module('weekEndApp')
.factory('AuthService',["$resource",'urlWeekTest' ,"$localStorage","USER_ROLES", ($resource,urlWeekTest ,$localStorage,USER_ROLES) => new weekEndApp.Factory.AuthService($resource, urlWeekTest,$localStorage,USER_ROLES)]);
