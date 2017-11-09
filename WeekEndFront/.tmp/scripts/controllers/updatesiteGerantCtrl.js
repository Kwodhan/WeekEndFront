/// <reference path="../app.ts" />
'use strict';
/**
* @ngdoc function
* @name weekEndApp.controller:UpdatesitegerantCtrl
* @description
* # UpdatesitegerantCtrl
* Controller of the weekEndApp
*/
var weekEndApp;
(function (weekEndApp) {
    var Controllers;
    (function (Controllers) {
        var UpdatesiteGerantCtrl = (function () {
            function UpdatesiteGerantCtrl($scope, $http, LocationsRest, SitesRest, $routeParams, ActivitiesRest, $location) {
                this.$scope = $scope;
                this.$http = $http;
                this.LocationsRest = LocationsRest;
                this.SitesRest = SitesRest;
                this.$routeParams = $routeParams;
                this.ActivitiesRest = ActivitiesRest;
                this.$location = $location;
                this.initController();
            }
            UpdatesiteGerantCtrl.prototype.initController = function () {
                var _this = this;
                var site = this.SitesRest.getSite(this.$routeParams.id);
                site.then(function (data) {
                    if (data) {
                        _this.$scope.name = data.data[0].name;
                        _this.$scope.sports = data.data[0].activities;
                        var location = data.data[0].location;
                        _this.$scope.markers = [{
                                coord: {
                                    latitude: location.latitude,
                                    longitude: location.longitude
                                },
                                city: location.city,
                                region: location.region,
                                icon: _this.pin_url(location.city),
                                id: location.id
                            }];
                    }
                    else {
                        _this.$location.path('/');
                    }
                });
                var promise = this.ActivitiesRest.getActivities();
                promise.then(function (data) {
                    _this.$scope.listeSport = data.data;
                });
                // Google map
                this.$scope.map = { center: { latitude: 48.117266, longitude: -2.287592000000018 }, zoom: 8, events: {
                        click: function (mapModel, eventName, originalEventArgs) {
                            var e = originalEventArgs[0];
                            _this.onPositionUpdate(e.latLng.lat(), e.latLng.lng());
                        },
                    } };
                this.$scope.click = function (marker) {
                };
                this.$scope.addSport = function () {
                    if (_this.$scope.sport && (_this.$scope.sports.indexOf(_this.$scope.listeSport[_this.$scope.sport - 1]) == -1)) {
                        _this.$scope.sports.push(_this.$scope.listeSport[_this.$scope.sport - 1]);
                    }
                };
                this.$scope.removeSport = function (element) {
                    var index = _this.$scope.sports.indexOf(element);
                    if (index > -1) {
                        _this.$scope.sports.splice(index, 1);
                    }
                };
                this.$scope.submit = function () {
                    if (!(_this.$scope.markers.length != 0 && _this.$scope.name)) {
                        return;
                    }
                    _this.SitesRest.updateSite({
                        id: _this.$routeParams.id,
                        name: _this.$scope.name,
                        siteWeb: _this.$scope.web,
                        activities: _this.$scope.sports,
                        location: _this.$scope.markers[0].id
                    }).then(function (result) {
                        _this.$location.path('/gerant/sites');
                    });
                };
            };
            UpdatesiteGerantCtrl.prototype.ajouterLocation = function (marker) {
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
            UpdatesiteGerantCtrl.prototype.onPositionUpdate = function (latitude, longitude) {
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
            UpdatesiteGerantCtrl.prototype.pin_url = function (pin_label) {
                var pin_color = '37455c';
                var pin_text_color = 'ffffff';
                return 'http://chart.apis.google.com/chart?' +
                    'chst=d_map_pin_letter_withshadow&chld=' +
                    pin_label + '|' + pin_color + '|' +
                    pin_text_color;
            };
            UpdatesiteGerantCtrl.prototype.searchCityRegion = function (data) {
                for (var _i = 0; _i < data.length; _i++) {
                    var type = data[_i];
                    if (type.types[0] === "locality") {
                        return { city: type.address_components[0].long_name, region: type.address_components[1].long_name };
                    }
                }
                return { city: '', region: '' };
            };
            UpdatesiteGerantCtrl.prototype.containt = function (nameKey, myArray) {
                for (var i = 0; i < myArray.length; i++) {
                    if (myArray[i].id === nameKey.id) {
                        return true;
                    }
                }
                return false;
            };
            UpdatesiteGerantCtrl.prototype.remove = function (nameKey, myArray) {
                for (var i = 0; i < myArray.length; i++) {
                    if (myArray[i].id === nameKey.id) {
                        myArray.splice(i, 1);
                    }
                }
                return myArray;
            };
            UpdatesiteGerantCtrl.$inject = ['$scope', '$http', 'LocationsRest', 'SitesRest', '$routeParams', 'ActivitiesRest', '$location'];
            return UpdatesiteGerantCtrl;
        })();
        Controllers.UpdatesiteGerantCtrl = UpdatesiteGerantCtrl;
    })(Controllers = weekEndApp.Controllers || (weekEndApp.Controllers = {}));
})(weekEndApp || (weekEndApp = {}));
angular.module('weekEndApp').controller('UpdatesiteGerantCtrl', weekEndApp.Controllers.UpdatesiteGerantCtrl);
