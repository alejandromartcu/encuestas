(function () {
    "use strict";

    function encuestasDataService($resource) {
        var factory = {};
        factory.test = true;

        factory.getEncuestas = function () {
            return encuestas.query().$promise;
        };
        factory.postEncuestas = function (encuesta) {
            return encuestas.save(encuesta);
        };
           


        var encuestas = $resource('/api/encuestas');
        
        return factory;
    }

    angular.module('encuestas').factory('encuestasDataService', encuestasDataService);
}());