(function () {
    "use strict";

    function encuestasDataService($resource) {
        var factory = {};
        factory.test = true;

        factory.getEncuestas = function () {
            return encuestas.query();
        };
        factory.newEncuesta = function () {
            return new encuestas();
        };
        factory.postEncuestas = function (encuesta) {
            console.log('grabando encuesta:'+ encuesta);
            return encuestas.save(encuesta);
        };
           


        var encuestas = $resource('/api/encuestas');
        
        return factory;
    }

    angular.module('encuestas').factory('encuestasDataService', encuestasDataService);
}());