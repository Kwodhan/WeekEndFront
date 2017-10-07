'use strict';

/**
 * @ngdoc function
 * @name weekEndProjectApp.controller:ListelocationCtrl
 * @description
 * # ListelocationCtrl
 * Controller of the weekEndProjectApp
 * APIGoogle = AIzaSyAau09m1LQhDtd3YJvZ9mJYH91RRN4JOCU
 */
angular.module('weekEndProjectApp')
  .controller('ListLocationsCtrl',  ['$scope','LocationsRest','UserRest','$http',function ($scope, LocationsRest,UserRest,$http) {
$scope.markers = [];
$scope.map = { center: { latitude: 48.117266, longitude: -2.287592000000018 }, zoom: 8,events: {
    click: function(mapModel, eventName, originalEventArgs)
              {
                var e = originalEventArgs[0];



                onPositionUpdate(e.latLng.lat(),e.latLng.lng());
              },


} };


if($scope.currentUser){
for(var home of $scope.currentUser.homes){

  $scope.markers.push({
     coord: {
        latitude: home.latitude,
        longitude: home.longitude
     },
     city: home.city,
     region: home.region,
         icon:"{url: 'http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|FE7569'}",
      id: home.id
  });

}


}

function ajouterLocation(marker) {
  var promise = LocationsRest.postLocation(marker);
  promise.then(function(data) {

    if(containt(data,$scope.markers)){
      return;
    }
    $scope.markers.push({
       coord: {
          latitude: data.latitude,
          longitude: data.longitude
       },
       city: data.city,
       region: data.region,
       show:true,
       icon:pin_url(data.city),
        id: data.id
    });


  });

}

$scope.click =  function(marker) {
 if(!$scope.currentUser ){
  remove(marker,$scope.markers);
}else if ($scope.currentUser && !$scope.isLocations(marker.id)){
remove(marker,$scope.markers);
}
}
function onPositionUpdate(latitude,longitude) {

    var url = "https://maps.googleapis.com/maps/api/geocode/json?latlng=" + latitude + "," + longitude + "&sensor=true";
    $http.get(url)
        .then(function(result) {

          var address = searchCityRegion(result.data.results);
          if(address.city && address.region){
            ajouterLocation({city:address.city , region:address.region,  latitude: latitude, longitude: longitude});
          }

});
}
$scope.isLocations = function(id) {

  for (var home of $scope.currentUser.homes) {

    if(home.id === id){
      return true;
    }
  }

   return false;
}


$scope.ajouter = function(id) {
var promise = UserRest.addHome(id);
promise.then(function(data) {
$scope.setCurrentUser(data);
});
}

$scope.enlever = function(id) {
var promise = UserRest.removeHome(id);
promise.then(function(data) {
$scope.setCurrentUser(data);

});
}
function pin_url(pin_label) {
        var pin_color = '37455c';
        var pin_text_color = 'ffffff';
        return 'http://chart.apis.google.com/chart?' +
               'chst=d_map_pin_letter_withshadow&chld=' +
               pin_label + '|' + pin_color + '|' +
               pin_text_color;
    };

function searchCityRegion(data) {

  for (var type of data) {
    if(type.types[0]==="locality"){
      return {city : type.address_components[0].long_name, region : type.address_components[1].long_name}
    }

  }

    return {city :'', region : ''}
};

    function containt(nameKey, myArray){
        for (var i=0; i < myArray.length; i++) {
            if (myArray[i].id === nameKey.id) {
                return true;
            }
        }
        return false;
    }
    function remove(nameKey, myArray){
        for (var i=0; i < myArray.length; i++) {
            if (myArray[i].id === nameKey.id) {
                myArray.splice(i, 1);
            }
        }

        return myArray;
    }

}]);
