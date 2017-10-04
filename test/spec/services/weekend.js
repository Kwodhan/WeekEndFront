'use strict';

describe('Service: WeekEnd', function () {

  // load the service's module
  beforeEach(module('weekEndProjectApp'));

  // instantiate service
  var WeekEnd;
  beforeEach(inject(function (_WeekEnd_) {
    WeekEnd = _WeekEnd_;
  }));

  it('should do something', function () {
    expect(!!WeekEnd).toBe(true);
  });

});
