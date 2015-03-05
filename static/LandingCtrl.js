(function () {
    "use strict";

    function controlador($stateParams, encuestasDataService) {
        var vm = this;
        vm.encuestas = encuestasDataService.getEncuestas();
    }

    angular
        .module('encuestas')
        .controller("LandingCtrl", controlador);

}());