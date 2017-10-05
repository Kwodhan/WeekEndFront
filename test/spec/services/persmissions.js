'use strict';

describe('Service: persmissions', function () {

  // load the service's module
  beforeEach(module('weekEndProjectApp'));

  // instantiate service
  var persmissions;
  beforeEach(inject(function (_persmissions_) {
    persmissions = _persmissions_;
  }));

  it('should do something', function () {
    expect(!!persmissions).toBe(true);
  });

});
