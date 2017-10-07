'use strict';

describe('Controller: ListactivitiesCtrl', function () {

  // load the controller's module
  beforeEach(module('weekEndProjectApp'));

  var ListactivitiesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ListactivitiesCtrl = $controller('ListactivitiesCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ListactivitiesCtrl.awesomeThings.length).toBe(3);
  });
});
