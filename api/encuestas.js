var encuestas = require('../data/encuestas.js');

exports.enrutar = function(router){
	var rutaEncuestas = router.route('/api/encuestas/');

	
	rutaEncuestas
		.get(function (peticion, respuesta) {
			// acumulado de encuestas
            respuesta.json(encuestas.selectAll());
		}).post(function (peticion, respuesta) {
            // Rellenar una encuesta
			respuesta.json(encuestas.insert(peticion.body));
		});

}