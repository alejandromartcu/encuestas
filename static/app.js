(function () {
    "use strict";

    angular
        .module('encuestas', ['ngResource', 'ui.router']);


    function statesConfig($stateProvider, $urlRouterProvider, $locationProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('landing', {
                url: '/',
                templateUrl: 'landing.html',
                controller: 'LandingCtrl as vm'
            })
            .state('nueva-encuesta', {
                url: '/nueva',
                templateUrl: 'nueva.html',
                controller: 'NuevaCtrl as vm'
            });

        //$locationProvider.html5Mode(true);
    }

    angular
        .module("encuestas")
        .config(statesConfig);
}());