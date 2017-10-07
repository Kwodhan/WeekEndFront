'use strict';

/**
 * @ngdoc function
 * @name weekEndProjectApp.controller:ListactivitiesCtrl
 * @description
 * # ListactivitiesCtrl
 * Controller of the weekEndProjectApp
 */
angular.module('weekEndProjectApp')
  .controller('ListActivitiesCtrl', ['$scope','ActivitiesRest','UserRest',function ($scope, ActivitiesRest,UserRest) {

    var promise = ActivitiesRest.getActivities();
    promise.then(function(data) {
      $scope.liste = data.data;
    });

    $scope.isActivities = function(id) {
      for (var activity of $scope.currentUser.activities) {
        if(activity.id === id){
          return true;
        }
      }
       return false;
   }

$scope.ajouter = function(id) {
  var promise = UserRest.addActivity(id);
  promise.then(function(data) {
  $scope.setCurrentUser(data);
  });
}

$scope.enlever = function(id) {
  var promise = UserRest.removeActivity(id);
  promise.then(function(data) {
  $scope.setCurrentUser(data);

  });
}

}]);
