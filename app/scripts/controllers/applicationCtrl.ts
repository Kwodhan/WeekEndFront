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
        this.$scope.isAuthorized = this.AuthService.isAuthorized;
      }
      else{
        this.$scope.currentUser = null;
        this.$scope.userRoles = this.USER_ROLES;
        this.$scope.isAuthorized = this.AuthService.isAuthorized;
      }

      this.$scope.setCurrentUser = (user) => {
        this.$localStorage.currentUser = user;
        this.$scope.currentUser = user;
  }
    }





  }
}

angular.module('weekEndApp').controller('ApplicationCtrl', weekEndApp.Controllers.ApplicationCtrl);
