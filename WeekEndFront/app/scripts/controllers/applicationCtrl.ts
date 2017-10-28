/// <reference path="../app.ts" />

'use strict';

module weekEndApp.Controllers {


  export class ApplicationCtrl {
    static $inject = ['$scope', 'USER_ROLES','AuthService','$localStorage'];

    constructor (private $scope,private USER_ROLES,private AuthService,private $localStorage) {
      this.initController();
    }



    initController() {

      if(this.$localStorage.currentUser){
        this.$scope.currentUser = this.$localStorage.currentUser;
        this.$scope.userRoles =this.USER_ROLES;
        this.$localStorage.role=this.$localStorage.currentUser.roles[0];

      }
      else{
        this.$scope.currentUser = null;
        this.$scope.userRoles = this.USER_ROLES;
        this.$localStorage.role=this.USER_ROLES.guest;
      }
      this.$scope.isAuthorized = (authorizedRoles) => {return this.AuthService.isAuthorized(authorizedRoles);};
      this.$scope.setCurrentUser = (user) => {
        if(user==null){
          this.$scope.currentUser = null;
        }else{
          this.$localStorage.role=user.roles[0];
          this.$localStorage.currentUser = user;
          this.$scope.currentUser = user;
        }
      }

    
    }








  }
}

angular.module('weekEndApp').controller('ApplicationCtrl', weekEndApp.Controllers.ApplicationCtrl);
