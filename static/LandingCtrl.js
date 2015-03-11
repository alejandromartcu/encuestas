(function () {
    "use strict";

    function controlador($stateParams, encuestasDataService) {
        var vm = this;
		vm.lenguajes = encuestasDataService.getCampoEncuestas("lenguaje");
        vm.intereses = encuestasDataService.getCampoEncuestas("interes");
		vm.profesiones = encuestasDataService.getCampoEncuestas("profesion"); //getEncuestas();
        
        encuestasDataService.getPreguntas().then(function (preguntas) {
			vm.preguntas = preguntas;
			vm.preguntas.forEach(function (pregunta) {
				pregunta.encuestas = encuestasDataService.getCampoEncuestas(pregunta.campo);
			});
		});

    }

    angular
        .module('encuestas')
        .controller("LandingCtrl", controlador);

}());