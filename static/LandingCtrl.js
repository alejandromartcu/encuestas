(function () {
    "use strict";

    function controlador(encuestasDataService, socketFactory) {
        var vm = this;

        vm.haVotado = false;
        vm.ultimaActualizacion = new Date();
        
        
        encuestasDataService.getPreguntas().then(function (preguntas) {
			vm.preguntas = preguntas;
			vm.preguntas.forEach(function (pregunta) {
				pregunta.respuestas = encuestasDataService.getRespuestas(pregunta.id);
			});
		});
        
        vm.encuesta = encuestasDataService.newEncuesta();

        vm.enviarEncuesta = function () {
            vm.preguntas.forEach(function (pregunta) {
                vm.encuesta[pregunta.campo] = pregunta.respuesta;
            });
            encuestasDataService.postEncuestas(vm.encuesta);
            socketFactory.connect();
            socketFactory.on('wellcome', function (data) {
                console.log("Me han recibido bien: " + JSON.stringify(data));
            });

            socketFactory.on('updateTutti', function (data) {
                console.log("Algo ha cambiado, recargando.... ");
                updateMetrics();
            });
            socketFactory.emit("postedData", {
                date: new Date()
            });
            vm.haVotado = true;
        }



        function updateMetrics() {
            encuestasDataService.getPreguntas().then(function (preguntas) {
                vm.preguntas = preguntas;
                vm.preguntas.forEach(function (pregunta) {
                    pregunta.encuestas = encuestasDataService.getCampoEncuestas(pregunta.campo);
                    vm.ultimaActualizacion = new Date();
                });
            });
        }
    }

    angular
        .module('encuestas')
        .controller("LandingCtrl", controlador);

}());