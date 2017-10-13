/// <reference path="../app.ts" />
'use strict';

/**
* @ngdoc function
* @name weekEndApp.controller:LoginCtrl
* @description
* # LoginCtrl
* Controller of the weekEndApp
*/
module weekEndApp.Controllers {


  export class LoginCtrl {
    static $inject = ['$scope', '$rootScope', 'AUTH_EVENTS','AuthService','$location',"$route"];

    constructor (private $scope,private $rootScope,private AUTH_EVENTS,private AuthService,private $location,private $route) {
      this.initController();
    }
    initController(){

      this.$scope.credentials = {
        pseudo: '',
        password: ''
      };

      this.$scope.login =  (credentials)=> {
        if(!(credentials.pseudo && credentials.password) ){
          this.$scope.errors="A problem occurred";
          return;
        }
        this.AuthService.login(credentials).then( (user)=> {
          if(user){
            this.$rootScope.$broadcast(this.AUTH_EVENTS.loginSuccess);
            this.$scope.setCurrentUser(user);
            //  this.$route.reload();
          }else{
            this.$scope.errors="Bad login or password";
          }
        });
      };

      this.$scope.logout =  ()=> {
        //this.$rootScope.$broadcast(this.AUTH_EVENTS.logoutSuccess);
        this.AuthService.logout();

        this.$scope.credentials = null;

  this.$scope.setCurrentUser(null);
  this.$scope.errors=null;
        this.$location.path('/');

      }

    }
  }
}
angular.module('weekEndApp').controller('LoginCtrl', weekEndApp.Controllers.LoginCtrl);
