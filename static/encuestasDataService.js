(function () {
    "use strict";

    function encuestasDataService($resource) {
        var factory = {};
        factory.test = true;

        factory.getEncuestas = function () {
            return encuestas.query();
        };
		factory.getCampoEncuestas = function (campo) {
            return encuestasGroup.query({campo:campo});
        };
        factory.newEncuesta = function () {
            return new encuestas();
        };
        factory.postEncuestas = function (encuesta) {
            console.log('grabando encuesta:'+ encuesta);
            return encuestas.save(encuesta);
        };
           


        var encuestas = $resource('/api/encuestas');
		var encuestasGroup = $resource('/api/:campo/encuestas/');
		        
        return factory;
    }

    angular.module('encuestas').factory('encuestasDataService', encuestasDataService);
}());