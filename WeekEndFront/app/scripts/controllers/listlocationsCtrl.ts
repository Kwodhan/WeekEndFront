/// <reference path="../app.ts" />
'use strict';

/**
* @ngdoc function
* @name weekEndApp.controller:ListelocationCtrl
* @description
* # ListelocationCtrl
* Controller of the weekEndApp
* APIGoogle = AIzaSyAau09m1LQhDtd3YJvZ9mJYH91RRN4JOCU
*/
module weekEndApp.Controllers {


  export class ListLocationsCtrl {
    static $inject = ['$scope','LocationsRest','UserRest','$http'  ];

    constructor (private $scope,private LocationsRest,private UserRest,private $http) {
      this.initController();
    }

    initController(){
      this.$scope.markers = [];
      this.$scope.map = { center: { latitude: 48.117266, longitude: -2.287592000000018 }, zoom: 8,events: {
        click: (mapModel, eventName, originalEventArgs)=>
        {
          var e = originalEventArgs[0];

          this.onPositionUpdate(e.latLng.lat(),e.latLng.lng());
        },


      } };


      if(this.$scope.currentUser){
        for(var home of this.$scope.currentUser.homes){


          this.$scope.markers.push({
            coord: {
              latitude: home.latitude,
              longitude: home.longitude
            },
            city: home.city,
            region: home.region,
            show:true,
            icon:"{url: 'http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|FE7569'}",
            id: home.id
          });

        }


      }

      this.$scope.click =  (marker)=> {

        if(!this.$scope.currentUser ){
          this.remove(marker,this.$scope.markers);
        }else if (this.$scope.currentUser ){

          this.remove(marker,this.$scope.markers);
          this.enlever(marker.id);
        }
      }

      this.$scope.isLocations = (id) =>{

        for (var home of this.$scope.currentUser.homes) {

          if(home.id === id){
            return true;
          }
        }

        return false;
      }
    }
    ajouterLocation(marker){

      if(this.$scope.currentUser){
        var promise = this.LocationsRest.postLocation(marker);
        promise.then((data) =>{

          if(this.containt(data,this.$scope.markers)){
            return;
          }
          this.$scope.markers.push({
            coord: {
              latitude: data.latitude,
              longitude: data.longitude
            },
            city: data.city,
            region: data.region,
            show:true,
            icon:this.pin_url(data.city),
            id: data.id
          });

          this.ajouter(data.id);

        });
      }

    }


    onPositionUpdate(latitude,longitude) {

      var url = "https://maps.googleapis.com/maps/api/geocode/json?latlng=" + latitude + "," + longitude + "&key="+"AIzaSyAau09m1LQhDtd3YJvZ9mJYH91RRN4JOCU";
      this.$http.get(url)
      .then((result)=> {
        var address = this.searchCityRegion(result.data.results);
        if(address.city && address.region){

          this.ajouterLocation({city:address.city , region:address.region,  latitude: latitude, longitude: longitude});
        }

      });
    }



    ajouter(id) {
      var promise = this.UserRest.addHome(id);
      promise.then((data)=> {

        this.$scope.setCurrentUser(data);
      },(data) =>{


      });
    }

    enlever(id) {
      var promise = this.UserRest.removeHome(id);
      promise.then((data) =>{
        this.$scope.setCurrentUser(data);

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

angular.module('weekEndApp').controller('ListLocationsCtrl', weekEndApp.Controllers.ListLocationsCtrl);
