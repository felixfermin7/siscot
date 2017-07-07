'use strict';

describe('Controller: HolaCtrl', function () {

  // load the controller's module
  beforeEach(module('siscotApp'));

  var HolaCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    HolaCtrl = $controller('HolaCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(HolaCtrl.awesomeThings.length).toBe(3);
  });
});
