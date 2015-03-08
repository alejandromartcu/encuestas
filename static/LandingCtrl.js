(function () {
    "use strict";

    function controlador($stateParams, encuestasDataService) {
        var vm = this;
		vm.lenguajes = encuestasDataService.getCampoEncuestas("lenguajeBase");
        vm.intereses = encuestasDataService.getCampoEncuestas("interes");
		vm.profesiones = encuestasDataService.getCampoEncuestas("profesion"); //getEncuestas();
    }

    angular
        .module('encuestas')
        .controller("LandingCtrl", controlador);

}());