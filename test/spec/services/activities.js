'use strict';

describe('Service: Activities', function () {

  // load the service's module
  beforeEach(module('weekEndProjectApp'));

  // instantiate service
  var Activities;
  beforeEach(inject(function (_Activities_) {
    Activities = _Activities_;
  }));

  it('should do something', function () {
    expect(!!Activities).toBe(true);
  });

});
