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
var weekEndApp;
(function (weekEndApp) {
    var Controllers;
    (function (Controllers) {
        var ListLocationsCtrl = (function () {
            function ListLocationsCtrl($scope, LocationsRest, UserRest, $http) {
                this.$scope = $scope;
                this.LocationsRest = LocationsRest;
                this.UserRest = UserRest;
                this.$http = $http;
                this.initController();
            }
            ListLocationsCtrl.prototype.initController = function () {
                var _this = this;
                this.$scope.markers = [];
                this.$scope.map = { center: { latitude: 48.117266, longitude: -2.287592000000018 }, zoom: 8, events: {
                        click: function (mapModel, eventName, originalEventArgs) {
                            var e = originalEventArgs[0];
                            _this.onPositionUpdate(e.latLng.lat(), e.latLng.lng());
                        },
                    } };
                if (this.$scope.currentUser) {
                    for (var _i = 0, _a = this.$scope.currentUser.homes; _i < _a.length; _i++) {
                        var home = _a[_i];
                        this.$scope.markers.push({
                            coord: {
                                latitude: home.latitude,
                                longitude: home.longitude
                            },
                            city: home.city,
                            region: home.region,
                            show: true,
                            icon: "{url: 'http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|FE7569'}",
                            id: home.id
                        });
                    }
                }
                this.$scope.click = function (marker) {
                    if (!_this.$scope.currentUser) {
                        _this.remove(marker, _this.$scope.markers);
                    }
                    else if (_this.$scope.currentUser) {
                        _this.remove(marker, _this.$scope.markers);
                        _this.enlever(marker.id);
                    }
                };
                this.$scope.isLocations = function (id) {
                    for (var _i = 0, _a = _this.$scope.currentUser.homes; _i < _a.length; _i++) {
                        var home = _a[_i];
                        if (home.id === id) {
                            return true;
                        }
                    }
                    return false;
                };
            };
            ListLocationsCtrl.prototype.ajouterLocation = function (marker) {
                var _this = this;
                if (this.$scope.currentUser) {
                    var promise = this.LocationsRest.postLocation(marker);
                    promise.then(function (data) {
                        if (_this.containt(data, _this.$scope.markers)) {
                            return;
                        }
                        _this.$scope.markers.push({
                            coord: {
                                latitude: data.latitude,
                                longitude: data.longitude
                            },
                            city: data.city,
                            region: data.region,
                            show: true,
                            icon: _this.pin_url(data.city),
                            id: data.id
                        });
                        _this.ajouter(data.id);
                    });
                }
            };
            ListLocationsCtrl.prototype.onPositionUpdate = function (latitude, longitude) {
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
            ListLocationsCtrl.prototype.ajouter = function (id) {
                var _this = this;
                var promise = this.UserRest.addHome(id);
                promise.then(function (data) {
                    _this.$scope.setCurrentUser(data);
                }, function (data) {
                });
            };
            ListLocationsCtrl.prototype.enlever = function (id) {
                var _this = this;
                var promise = this.UserRest.removeHome(id);
                promise.then(function (data) {
                    _this.$scope.setCurrentUser(data);
                });
            };
            ListLocationsCtrl.prototype.pin_url = function (pin_label) {
                var pin_color = '37455c';
                var pin_text_color = 'ffffff';
                return 'http://chart.apis.google.com/chart?' +
                    'chst=d_map_pin_letter_withshadow&chld=' +
                    pin_label + '|' + pin_color + '|' +
                    pin_text_color;
            };
            ListLocationsCtrl.prototype.searchCityRegion = function (data) {
                for (var _i = 0; _i < data.length; _i++) {
                    var type = data[_i];
                    if (type.types[0] === "locality") {
                        return { city: type.address_components[0].long_name, region: type.address_components[1].long_name };
                    }
                }
                return { city: '', region: '' };
            };
            ListLocationsCtrl.prototype.containt = function (nameKey, myArray) {
                for (var i = 0; i < myArray.length; i++) {
                    if (myArray[i].id === nameKey.id) {
                        return true;
                    }
                }
                return false;
            };
            ListLocationsCtrl.prototype.remove = function (nameKey, myArray) {
                for (var i = 0; i < myArray.length; i++) {
                    if (myArray[i].id === nameKey.id) {
                        myArray.splice(i, 1);
                    }
                }
                return myArray;
            };
            ListLocationsCtrl.$inject = ['$scope', 'LocationsRest', 'UserRest', '$http'];
            return ListLocationsCtrl;
        })();
        Controllers.ListLocationsCtrl = ListLocationsCtrl;
    })(Controllers = weekEndApp.Controllers || (weekEndApp.Controllers = {}));
})(weekEndApp || (weekEndApp = {}));
angular.module('weekEndApp').controller('ListLocationsCtrl', weekEndApp.Controllers.ListLocationsCtrl);
