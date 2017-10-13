/// <reference path="../app.ts" />
'use strict';

/**
* @ngdoc function
* @name weekEndApp.controller:UpdatesitegerantCtrl
* @description
* # UpdatesitegerantCtrl
* Controller of the weekEndApp
*/
module weekEndApp.Controllers {


  export class UpdatesiteGerantCtrl {
    static $inject = ['$scope','$http','LocationsRest','SitesRest','$routeParams','ActivitiesRest','$location'];

    constructor (private $scope,private $http,private LocationsRest,private SitesRest,private $routeParams,private ActivitiesRest,private $location) {
      this.initController();
    }


    initController() {


      var site = this.SitesRest.getSite(this.$routeParams.id);
      site.then((data) =>{

        this.$scope.name=data.data[0].name;
        this.$scope.sports=data.data[0].activities;
        var location =data.data[0].location;

        this.$scope.markers= [{
          coord: {
            latitude: location.latitude,
            longitude: location.longitude
          },
          city: location.city,
          region: location.region,
          icon:this.pin_url(location.city),
          id: location.id
        }];
      });

      var promise = this.ActivitiesRest.getActivities();
      promise.then((data) =>{

        this.$scope.listeSport = data.data;

      });

      // Google map
      this.$scope.map = { center: { latitude: 48.117266, longitude: -2.287592000000018 }, zoom: 8,events: {
        click: (mapModel, eventName, originalEventArgs)=>
        {
          var e = originalEventArgs[0];



          this.onPositionUpdate(e.latLng.lat(),e.latLng.lng());
        },


      } };
      this.$scope.click =  (marker)=> {

      }

      this.$scope.addSport= ()=>{
        if(  this.$scope.sport &&  (this.$scope.sports.indexOf(this.$scope.listeSport[this.$scope.sport-1]) == -1)){
          this.$scope.sports.push(this.$scope.listeSport[this.$scope.sport-1]);
        }
      }

      this.$scope.removeSport= (element)=>{
        var index = this.$scope.sports.indexOf(element);
        if (index > -1) {
          this.$scope.sports.splice(index, 1);
        }

      }


      this.$scope.submit = ()=>{

        if(!(this.$scope.markers.length != 0 && this.$scope.name)){
          return;
        }
        this.SitesRest.updateSite({
          id:this.$routeParams.id,
          name : this.$scope.name,
          activities:this.$scope.sports,
          location:this.$scope.markers[0].id
        }

      ).then((result) =>{
        this.$location.path('/gerant/sites');
      });





    }

  }




  ajouterLocation(marker) {
    var promise = this.LocationsRest.postLocation(marker);
    promise.then((data)=> {

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
angular.module('weekEndApp').controller('UpdatesiteGerantCtrl', weekEndApp.Controllers.UpdatesiteGerantCtrl);
