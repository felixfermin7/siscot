'use strict';

/**
 * @ngdoc function
 * @name siscotApp.controller:CotizacionesCtrl
 * @description
 * # CotizacionesCtrl
 * Controller of the siscotApp
 */
angular.module('siscotApp')
    .controller('cotizacionesCtrl', ['$scope', function ($scope) {



        $scope.alumnos = [{ "nombre": "Jossy", "telefono": "99735142", "curso": "tercero" },
        { "nombre": "Chemo", "telefono": "4343222", "curso": "Primero" },
        { "nombre": "nasser", "telefono": "1123323", "curso": "Segundo" },
        { "nombre": "felix", "telefono": "1324324543", "curso": "quinto" }
        ];
        
        var vm = this;

    }]);
