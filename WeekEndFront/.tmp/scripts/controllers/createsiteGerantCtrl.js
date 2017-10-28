/// <reference path="../app.ts" />
'use strict';
/**
* @ngdoc function
* @name weekEndApp.controller:ListsiteCtrl
* @description
* # ListsiteCtrl
* Controller of the weekEndApp
*/
var weekEndApp;
(function (weekEndApp) {
    var Controllers;
    (function (Controllers) {
        var CreatesiteGerantCtrl = (function () {
            function CreatesiteGerantCtrl($scope, LocationsRest, ActivitiesRest, SitesRest, UserRest, $http, $location) {
                this.$scope = $scope;
                this.LocationsRest = LocationsRest;
                this.ActivitiesRest = ActivitiesRest;
                this.SitesRest = SitesRest;
                this.UserRest = UserRest;
                this.$http = $http;
                this.$location = $location;
                this.initController();
            }
            CreatesiteGerantCtrl.prototype.initController = function () {
                var _this = this;
                this.$scope.markers = [];
                this.$scope.sports = [];
                var promise = this.ActivitiesRest.getActivities();
                promise.then(function (data) {
                    _this.$scope.listeSport = data.data;
                });
                //
                this.$scope.map = { center: { latitude: 48.117266, longitude: -2.287592000000018 }, zoom: 8, events: {
                        click: (function (mapModel, eventName, originalEventArgs) {
                            var e = originalEventArgs[0];
                            _this.onPositionUpdate(e.latLng.lat(), e.latLng.lng());
                        }),
                    } };
                this.$scope.click = (function (marker) {
                });
                this.$scope.addSport = (function () {
                    if (_this.$scope.sport && (_this.$scope.sports.indexOf(_this.$scope.listeSport[_this.$scope.sport - 1]) == -1)) {
                        _this.$scope.sports.push(_this.$scope.listeSport[_this.$scope.sport - 1]);
                    }
                });
                this.$scope.removeSport = (function (element) {
                    var index = _this.$scope.sports.indexOf(element);
                    if (index > -1) {
                        _this.$scope.sports.splice(index, 1);
                    }
                });
                this.$scope.submit = (function () {
                    if (!(_this.$scope.markers.length != 0 && _this.$scope.name)) {
                        return;
                    }
                    _this.SitesRest.postSite({
                        name: _this.$scope.name,
                        siteWeb: _this.$scope.web,
                        activities: _this.$scope.sports,
                        locationid: _this.$scope.markers[0].id }).then(function (result) {
                        _this.$location.path('/gerant/sites');
                    });
                });
            };
            // Google map
            CreatesiteGerantCtrl.prototype.ajouterLocation = function (marker) {
                var _this = this;
                var promise = this.LocationsRest.postLocation(marker);
                promise.then(function (data) {
                    if (_this.containt(data, _this.$scope.markers)) {
                        return;
                    }
                    _this.$scope.markers = [{
                            coord: {
                                latitude: data.latitude,
                                longitude: data.longitude
                            },
                            city: data.city,
                            region: data.region,
                            show: true,
                            id: data.id
                        }];
                });
            };
            CreatesiteGerantCtrl.prototype.onPositionUpdate = function (latitude, longitude) {
                var _this = this;
                var url = "https://maps.googleapis.com/maps/api/geocode/json?latlng=" + latitude + "," + longitude + "&key=" + "AIzaSyAau09m1LQhDtd3YJvZ9mJYH91RRN4JOCU";
                this.$http.get(url)
                    .then(function (result) {
                    var address = _this.searchCityRegion(result.data.results);
                    if (address.city && address.region) {
                        _this.ajouterLocation({ city: address.city, region: address.region, latitude: latitude, longitude: longitude });
                    }
                });
            };
            CreatesiteGerantCtrl.prototype.pin_url = function (pin_label) {
                var pin_color = '37455c';
                var pin_text_color = 'ffffff';
                return 'http://chart.apis.google.com/chart?' +
                    'chst=d_map_pin_letter_withshadow&chld=' +
                    pin_label + '|' + pin_color + '|' +
                    pin_text_color;
            };
            CreatesiteGerantCtrl.prototype.searchCityRegion = function (data) {
                for (var _i = 0; _i < data.length; _i++) {
                    var type = data[_i];
                    if (type.types[0] === "locality") {
                        return { city: type.address_components[0].long_name, region: type.address_components[1].long_name };
                    }
                }
                return { city: '', region: '' };
            };
            // End Google map
            CreatesiteGerantCtrl.prototype.containt = function (nameKey, myArray) {
                for (var i = 0; i < myArray.length; i++) {
                    if (myArray[i].id === nameKey.id) {
                        return true;
                    }
                }
                return false;
            };
            CreatesiteGerantCtrl.prototype.remove = function (nameKey, myArray) {
                for (var i = 0; i < myArray.length; i++) {
                    if (myArray[i].id === nameKey.id) {
                        myArray.splice(i, 1);
                    }
                }
                return myArray;
            };
            CreatesiteGerantCtrl.$inject = ['$scope', 'LocationsRest', 'ActivitiesRest', 'SitesRest', 'UserRest', '$http', '$location'];
            return CreatesiteGerantCtrl;
        })();
        Controllers.CreatesiteGerantCtrl = CreatesiteGerantCtrl;
    })(Controllers = weekEndApp.Controllers || (weekEndApp.Controllers = {}));
})(weekEndApp || (weekEndApp = {}));
angular.module('weekEndApp').controller('CreatesiteGerantCtrl', weekEndApp.Controllers.CreatesiteGerantCtrl);
