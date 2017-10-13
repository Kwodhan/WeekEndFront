/// <reference path="../../../typings/angularjs/angular-mocks.d.ts" />
/// <reference path="../../../typings/jasmine/jasmine.d.ts" />
/// <reference path="../../../app/scripts/services/userrest.ts" />

'use strict';

describe('Service: UserRest', () => {

  // load the service's module
  beforeEach(module('weekEndApp'));

  // instantiate service
  var UserRest;
  beforeEach(inject(_UserRest_ => {
    UserRest = _UserRest_;
  }));

  it('should do something', () => {
    expect(!!UserRest).toBe(true);
  });

});
