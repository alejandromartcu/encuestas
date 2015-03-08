var encuestas = require('../data/encuestas.js');


exports.enrutar = function (router) {
	var rutaEncuestas = router.route('/api/encuestas/');
	var rutaCampoEncuestas = router.route('/api/:campo/encuestas/');


	rutaEncuestas
		.get(function (peticion, respuesta) {
			encuestas.selectAll(respuesta);
		}).post(function (peticion, respuesta) {
			encuestas.insert(peticion.body, respuesta);
		});
	rutaCampoEncuestas.get(function (peticion, respuesta) {
			encuestas.groupBy(peticion.params.campo,respuesta);
		});
	
}