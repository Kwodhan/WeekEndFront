'use strict';

describe('Controller: UpdatesitegerantCtrl', function () {

  // load the controller's module
  beforeEach(module('weekEndProjectApp'));

  var UpdatesitegerantCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    UpdatesitegerantCtrl = $controller('UpdatesitegerantCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(UpdatesitegerantCtrl.awesomeThings.length).toBe(3);
  });
});
