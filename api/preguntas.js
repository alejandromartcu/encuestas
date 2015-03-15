exports.enrutar = function (router) {
	var rutaPreguntas = router.route('/api/preguntas/');
	var rutaPreguntaRespuestas = router.route('/api/preguntas/:pregunta/respuestas/');
	var preguntas = [{
		id: 'lenguajes',
		campo:'lenguaje',
		texto: 'Lenguaje actual'
	}, {
		id: 'intereses',
		campo:'interes',
		texto: 'Interés'
	}, {
		id: 'profesiones',
		campo:'profesion',
		texto: 'Profesion'
	}];

	rutaPreguntas
		.get(function (peticion, respuesta) {
			respuesta.json(preguntas);
		});
	rutaPreguntaRespuestas
		.get(function (peticion, respuesta) {
			var pregunta = peticion.params.pregunta;
			var respuestas = [];
			switch (pregunta) {
			case "lenguajes":
				respuestas = ['C', 'Java', 'ObjectiveC', 'C#', 'Javascript', 'PHP', 'HTML' ,'Python', 'Ruby', 'Otros'];
				break;
			case "intereses":
				respuestas = ['AngularJS', 'ReactJS', 'Bootstrap', 'Material-Design', 'NodeJS', 'MongoDB', 'Otros'];
				break;
			case "profesiones":
				respuestas = ['Arquitecto-Software', 'Programador', 'Analista', 'Project-Manager', 'Diseñador-Gráfico', 'Sistemas', 'Otros'];
				break;
			}
			respuesta.json(respuestas);
		});

}