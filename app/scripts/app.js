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
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/hola', {
        templateUrl: 'views/hola.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
      
  });
