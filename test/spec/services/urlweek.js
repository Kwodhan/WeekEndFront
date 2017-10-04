'use strict';

describe('Service: urlWeek', function () {

  // load the service's module
  beforeEach(module('weekEndProjectApp'));

  // instantiate service
  var urlWeek;
  beforeEach(inject(function (_urlWeek_) {
    urlWeek = _urlWeek_;
  }));

  it('should do something', function () {
    expect(!!urlWeek).toBe(true);
  });

});
