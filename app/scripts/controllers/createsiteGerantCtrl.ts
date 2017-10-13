/// <reference path="../app.ts" />
'use strict';

/**
* @ngdoc function
* @name weekEndApp.controller:ListsiteCtrl
* @description
* # ListsiteCtrl
* Controller of the weekEndApp
*/

module weekEndApp.Controllers {


  export class CreatesiteGerantCtrl {
    static $inject = ['$scope','LocationsRest','ActivitiesRest','SitesRest','UserRest','$http',  '$location'];

    constructor (private $scope,private LocationsRest,private ActivitiesRest,private SitesRest,private UserRest,private $http,private $location) {
      this.initController();
    }


    initController() {
      this.$scope.markers = [];
      this.$scope.sports =[];
      var promise = this.ActivitiesRest.getActivities();
      promise.then((data) => {

        this.$scope.listeSport = data.data;


      });
      //
      this.$scope.map = { center: { latitude: 48.117266, longitude: -2.287592000000018 }, zoom: 8,events: {
        click: ((mapModel, eventName, originalEventArgs) => {

          var e = originalEventArgs[0];
          this.onPositionUpdate(e.latLng.lat(),e.latLng.lng());
        }),


      } };

      this.$scope.click =  ((marker) => {



      });

      this.$scope.addSport= (() => {
        if(  this.$scope.sport && (  this.$scope.sports.indexOf(  this.$scope.listeSport[  this.$scope.sport-1]) == -1)){
          this.$scope.sports.push(  this.$scope.listeSport[  this.$scope.sport-1]);
        }
      });

      this.$scope.removeSport= ((element) => {
        var index =   this.$scope.sports.indexOf(element);
        if (index > -1) {
          this.$scope.sports.splice(index, 1);
        }

      });


      this.$scope.submit = (() => {

        if(!(  this.$scope.markers.length != 0 &&   this.$scope.name)){
          return;
        }
        this.SitesRest.postSite({
          name :   this.$scope.name,
          activities:  this.$scope.sports,
          locationid:  this.$scope.markers[0].id}
        ).then((result)=> {
          this.$location.path('/gerant/sites');
        });

      });
    }


    // Google map



    ajouterLocation(marker) {
      var promise = this.LocationsRest.postLocation(marker);
      promise.then((data) => {

        if(this.containt(data,this.$scope.markers)){
          return;
        }

        this.$scope.markers = [{
          coord: {
            latitude: data.latitude,
            longitude: data.longitude
          },
          city: data.city,
          region: data.region,
          show:true,
          id: data.id
        }];



      });

    }


    onPositionUpdate(latitude,longitude) {

      var url = "https://maps.googleapis.com/maps/api/geocode/json?latlng=" + latitude + "," + longitude + "&key="+"AIzaSyAau09m1LQhDtd3YJvZ9mJYH91RRN4JOCU";
      this.$http.get(url)
      .then((result) =>{

        var address = this.searchCityRegion(result.data.results);

        if(address.city && address.region){

          this.ajouterLocation({city:address.city , region:address.region,  latitude: latitude, longitude: longitude});
        }

      });
    }






    pin_url(pin_label) {
      var pin_color = '37455c';
      var pin_text_color = 'ffffff';
      return 'http://chart.apis.google.com/chart?' +
      'chst=d_map_pin_letter_withshadow&chld=' +
      pin_label + '|' + pin_color + '|' +
      pin_text_color;
    }

    searchCityRegion(data) {

      for (var type of data) {
        if(type.types[0]==="locality"){
          return {city : type.address_components[0].long_name, region : type.address_components[1].long_name}
        }

      }

      return {city :'', region : ''}
    }
    // End Google map
    containt(nameKey, myArray){
      for (var i=0; i < myArray.length; i++) {
        if (myArray[i].id === nameKey.id) {
          return true;
        }
      }
      return false;
    }
    remove(nameKey, myArray){
      for (var i=0; i < myArray.length; i++) {
        if (myArray[i].id === nameKey.id) {
          myArray.splice(i, 1);
        }
      }

      return myArray;
    }





  }
}

angular.module('weekEndApp').controller('CreatesiteGerantCtrl', weekEndApp.Controllers.CreatesiteGerantCtrl);
