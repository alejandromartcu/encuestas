(function () {
	"use strict";

	function controlador(encuestasDataService) {
		var vm = this;

		encuestasDataService.getPreguntas().then(function (preguntas) {
			vm.preguntas = preguntas;
			vm.preguntas.forEach(function (pregunta) {
				pregunta.respuestas = encuestasDataService.getRespuestas(pregunta.id);
			});
		});

		vm.encuesta = encuestasDataService.newEncuesta();
		
		vm.crearEncuesta = function () {
			vm.preguntas.forEach(function(pregunta){
				vm.encuesta[pregunta.campo] = pregunta.respuesta;
			});
			encuestasDataService.postEncuestas(vm.encuesta);
		}

	}

	angular
		.module('encuestas')
		.controller("NuevaCtrl", controlador);

}());