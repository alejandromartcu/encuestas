(function () {
    "use strict";

    function controlador(encuestasDataService) {
        var vm = this;
        
        vm.lenguajes = ['C','Java','ObjectiveC','C#','Javascript','PHP','Python','Ruby','Otros']; 
            
		vm.intereses = ['AngularJS','ReactJS','Bootstrap','Material Design','NodeJS','MongoDB','Otros' ];
		
        vm.profesiones =  ['Arquitecto de Software','Programador','Analista','Project Manager','Diseñador gráfico','Administrador de Sistemas','Otros'];
            
        vm.encuesta = encuestasDataService.newEncuesta();
        vm.crearEncuesta = function(){
           encuestasDataService.postEncuestas(vm.encuesta);
        }
            
    }

    angular
        .module('encuestas')
        .controller("NuevaCtrl", controlador);

}());