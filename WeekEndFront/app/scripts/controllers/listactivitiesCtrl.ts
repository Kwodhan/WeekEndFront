/// <reference path="../app.ts" />
'use strict';

/**
* @ngdoc function
* @name weekEndApp.controller:ListactivitiesCtrl
* @description
* # ListactivitiesCtrl
* Controller of the weekEndApp
*/
module weekEndApp.Controllers {


  export class ListActivitiesCtrl {
    static $inject = ['$scope','ActivitiesRest','UserRest'];

    constructor (private $scope,private ActivitiesRest,private UserRest) {
      this.initController();
    }

    initController() {
      var promise = this.ActivitiesRest.getActivities();
      promise.then((data) =>{

        this.$scope.liste = data.data;
      });

      this.$scope.isActivities = (id) => {
        for (var activity of this.$scope.currentUser.activities) {
          if(activity.id === id){
            return true;
          }
        }
        return false;
      }

      this.$scope.ajouter = (id) =>{
        var promise = this.UserRest.addActivity(id);
        promise.then((data)=> {
          this.$scope.setCurrentUser(data);
        });
      }

      this.$scope.enlever = (id) => {
        var promise = this.UserRest.removeActivity(id);
        promise.then((data)=> {
          this.$scope.setCurrentUser(data);

        });
      }

    }

  }
}

angular.module('weekEndApp').controller('ListActivitiesCtrl', weekEndApp.Controllers.ListActivitiesCtrl);
