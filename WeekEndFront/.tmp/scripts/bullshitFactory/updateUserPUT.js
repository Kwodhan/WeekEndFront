/// <reference path="../app.ts" />
'use strict';
var weekEndApp;
(function (weekEndApp) {
    var Factory;
    (function (Factory) {
        var UpdateUser = (function () {
            function UpdateUser($resource, urlWeekTest, $localStorage) {
                this.$resource = $resource;
                this.urlWeekTest = urlWeekTest;
                this.$localStorage = $localStorage;
            }
            UpdateUser.prototype.updateActivity = function (idu, ida) {
                var User = this.$resource(this.urlWeekTest + '/users/:idu/activities/:ida', { idu: '@idu', ida: '@ida' }, {
                    update: { method: 'PUT', params: { idu: '@idu', ida: '@ida' }, headers: { 'Authorization': (this.$localStorage.currentUser ? this.$localStorage.currentUser.basic : '') } } });
                var user = User.update({
                    idu: idu,
                    ida: ida
                });
                return user;
            };
            UpdateUser.prototype.updateLocation = function (idu, idl) {
                var User = this.$resource(this.urlWeekTest + '/users/:idu/homes/:idl', { idu: '@idu', idl: '@idl' }, {
                    update: { method: 'PUT', params: { idu: '@idu', idl: '@idl' }, headers: { 'Authorization': (this.$localStorage.currentUser ? this.$localStorage.currentUser.basic : '') } } });
                var user = User.update({
                    idu: idu,
                    idl: idl
                });
                return user;
            };
            return UpdateUser;
        })();
        Factory.UpdateUser = UpdateUser;
    })(Factory = weekEndApp.Factory || (weekEndApp.Factory = {}));
})(weekEndApp || (weekEndApp = {}));
angular.module('weekEndApp')
    .factory('UpdateUser', ["$resource", 'urlWeekTest', "$localStorage", function ($resource, urlWeekTest, $localStorage) { return new weekEndApp.Factory.UpdateUser($resource, urlWeekTest, $localStorage); }]);
