'use strict';

describe('Service: UserUpdate', function () {

  // load the service's module
  beforeEach(module('weekEndProjectApp'));

  // instantiate service
  var UserUpdate;
  beforeEach(inject(function (_UserUpdate_) {
    UserUpdate = _UserUpdate_;
  }));

  it('should do something', function () {
    expect(!!UserUpdate).toBe(true);
  });

});
