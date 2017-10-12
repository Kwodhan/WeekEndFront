/// <reference path="../../../typings/angularjs/angular-mocks.d.ts" />
/// <reference path="../../../typings/jasmine/jasmine.d.ts" />
/// <reference path="../../../app/scripts/services/interceptor.ts" />

'use strict';

describe('Service: interceptor', () => {

  // load the service's module
  beforeEach(module('weekEndApp'));

  // instantiate service
  var interceptor;
  beforeEach(inject(_interceptor_ => {
    interceptor = _interceptor_;
  }));

  it('should do something', () => {
    expect(!!interceptor).toBe(true);
  });

});
