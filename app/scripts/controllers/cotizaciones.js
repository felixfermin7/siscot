'use strict';

/**
 * @ngdoc function
 * @name siscotApp.controller:CotizacionesCtrl
 * @description
 * # CotizacionesCtrl
 * Controller of the siscotApp
 */
angular.module('siscotApp')
    .controller('cotizacionesCtrl', ['$scope', '$http', function ($scope, $http) {

        $http.get('http://localhost:3000/cotizaciones/').then(function (r) {
            $scope.cotizaciones = r.data;
        }, function (error){

    console.log("hola");
        });
        
        $scope.alumnos = [{ "nombre": "Jossy", "telefono": "99735142", "curso": "tercero" },
            { "nombre": "Chemo", "telefono": "4343222", "curso": "Primero" },
            { "nombre": "nasser", "telefono": "1123323", "curso": "Segundo" },
            { "nombre": "felix", "telefono": "1324324543", "curso": "quinto" }
            ];

        var vm = this;

    }]);
