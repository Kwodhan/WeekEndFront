/// <reference path="../app.ts" />
'use strict';

module weekEndApp.Controllers {


  export class RegisterCtrl {
    static $inject = ['$scope', '$rootScope','$location', 'AUTH_EVENTS','AuthService'];

    constructor (private $scope,private $rootScope,private $location,private AUTH_EVENTS,private AuthService) {
      this.initController();
    }
    initController(){

      this.$scope.credentials = {
        pseudo: '',
        password: '',
        emailAddress:''
      };


      this.$scope.register =  (credentials)=> {

        if(!(credentials.pseudo && credentials.password && credentials.emailAddress) ){
          this.$scope.errors="A problem occurred";
          return;
        }
        this.AuthService.registration(credentials).then( (user) =>{
          if(user){
            this.$rootScope.$broadcast(this.AUTH_EVENTS.loginSuccess);
            this.$scope.setCurrentUser(user);
            this.$location.path('/');
          }else{
            this.$scope.errors="That Pseudo is already taken";
          }
        });
      };
    }
  }
}
angular.module('weekEndApp').controller('RegisterCtrl', weekEndApp.Controllers.RegisterCtrl);
