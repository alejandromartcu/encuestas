var encuestas = require('../data/encuestas.js');


exports.enrutar = function (router) {
	var rutaEncuestas = router.route('/api/encuestas/');
	var rutaCampoEncuestas = router.route('/api/:campo/encuestas/');


	rutaEncuestas
		.get(function (peticion, respuesta) {
			encuestas.selectAll(respuesta);
		}).post(function (peticion, respuesta) {
			var ip = peticion.headers['x-forwarded-for'] ||
				peticion.connection.remoteAddress ||
				peticion.socket.remoteAddress ||
				peticion.connection.socket.remoteAddress;
			peticion.body.ip = ip; 	
			encuestas.insert(peticion.body, respuesta);
		});
	rutaCampoEncuestas.get(function (peticion, respuesta) {
		encuestas.groupBy(peticion.params.campo, respuesta);
	});

}