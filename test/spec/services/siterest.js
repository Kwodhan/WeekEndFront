'use strict';

describe('Service: siteRest', function () {

  // load the service's module
  beforeEach(module('weekEndProjectApp'));

  // instantiate service
  var siteRest;
  beforeEach(inject(function (_siteRest_) {
    siteRest = _siteRest_;
  }));

  it('should do something', function () {
    expect(!!siteRest).toBe(true);
  });

});
