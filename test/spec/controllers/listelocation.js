'use strict';

describe('Controller: ListelocationCtrl', function () {

  // load the controller's module
  beforeEach(module('weekEndProjectApp'));

  var ListelocationCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ListelocationCtrl = $controller('ListelocationCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ListelocationCtrl.awesomeThings.length).toBe(3);
  });
});
