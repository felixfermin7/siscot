'use strict';

/**
 * @ngdoc function
 * @name siscotApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the siscotApp
 */
angular.module('siscotApp')
  .controller('AboutCtrl', ['$scope', function ($scope) {
    var vm = this; // this is a good practice, you can use vm instead of $scope

    vm.myFunction = function () {
      console.log('hey felix')
    }

    vm.myFunction();
  }]);
