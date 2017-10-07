'use strict';

describe('Controller: ListsiteCtrl', function () {

  // load the controller's module
  beforeEach(module('weekEndProjectApp'));

  var ListsiteCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ListsiteCtrl = $controller('ListsiteCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ListsiteCtrl.awesomeThings.length).toBe(3);
  });
});
