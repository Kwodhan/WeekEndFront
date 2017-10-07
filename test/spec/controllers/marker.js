'use strict';

describe('Controller: MarkerCtrl', function () {

  // load the controller's module
  beforeEach(module('weekEndProjectApp'));

  var MarkerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MarkerCtrl = $controller('MarkerCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MarkerCtrl.awesomeThings.length).toBe(3);
  });
});
