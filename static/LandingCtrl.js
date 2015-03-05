(function () {
    "use strict";

    function controlador($stateParams, encuestasDataService) {
        var vm = this;
        vm.shopName = $stateParams.shopName;
        vm.currentShop = {};
        vm.categories = [];
        
        

    }

    angular
        .module('encuestas')
        .controller("LandingCtrl", controlador);

}());