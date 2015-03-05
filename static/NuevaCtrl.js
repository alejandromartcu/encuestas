(function () {
    "use strict";

    function controlador(encuestasDataService) {
        var vm = this;
        vm.prueba = 'hola';
        vm.lenguajes = [ 
            { name: 'C#' },
            { name: 'Java' },
            { name: 'NodeJS' },
            { name: 'AngularJS' },
            { name: 'HTML' },
            { name: 'Javascript' },
            { name: 'CSS' }];
    
        vm.profesiones =  [ 
            { name: 'Programador' },
            { name: 'Arquitecto de Software' },
            { name: 'Diseñador gráfico' },
            { name: 'Informático' },
            { name: 'Otros' }];
        
        vm.encuesta = encuestasDataService.newEncuesta();
        vm.crearEncuesta = function(){
           encuestasDataService.postEncuestas(vm.encuesta);
        }
            
    }

    angular
        .module('encuestas')
        .controller("NuevaCtrl", controlador);

}());