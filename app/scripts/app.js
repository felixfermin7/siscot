'use strict';

/**
 * @ngdoc overview
 * @name siscotApp
 * @description
 * # siscotApp
 *
 * Main module of the application.
 */
angular
  .module('siscotApp', [
    'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/cotizaciones.html',
        controller: 'cotizacionesCtrl',
        controllerAs: 'vm'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'vm'
      })
      .when('/inicio', {
        templateUrl: 'views/inicio.html',
        controller: 'HolaCtrl',
        controllerAs: 'vm'
      })
      .when('/cargarlista', {
        templateUrl: 'views/hola.html',
        controller: 'HolaCtrl',
        controllerAs: 'vm'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
