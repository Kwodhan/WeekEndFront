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


  export class ListsitesGerantCtrl {
    static $inject = ['$scope','SitesRest'];

    constructor (private $scope,private SitesRest) {
      this.initController();
    }
    initController(){

      var promise = this.SitesRest.getSites();
      promise.then((data) => {

        this.$scope.liste = data.data;
      });
      this.$scope.delete = (element)=> {

          this.SitesRest.deleteSite(element.id);
          var index =   this.$scope.liste.indexOf(element);
          if (index > -1) {
            this.$scope.liste.splice(index, 1);
          }
      };





    }


  }


}
angular.module('weekEndApp').controller('ListsitesGerantCtrl', weekEndApp.Controllers.ListsitesGerantCtrl);
