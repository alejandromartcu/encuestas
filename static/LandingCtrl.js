(function () {
	"use strict";

	function controlador($stateParams, encuestasDataService, socketFactory) {
		var vm = this;
		socketFactory.connect();
		
		socketFactory.on('wellcome', function (data) {
			console.log("Me han recibido bien: " + JSON.stringify(data));
			updateMetrics();
		});

		socketFactory.on('updateTutti', function (data) {
			console.log("Algo ha cambiado, recargando.... ");
			updateMetrics();
		});

		function updateMetrics() {
			encuestasDataService.getPreguntas().then(function (preguntas) {
				vm.preguntas = preguntas;
				vm.preguntas.forEach(function (pregunta) {
					pregunta.encuestas = encuestasDataService.getCampoEncuestas(pregunta.campo);
				});
			});
		}
	}

	angular
		.module('encuestas')
		.controller("LandingCtrl", controlador);

}());