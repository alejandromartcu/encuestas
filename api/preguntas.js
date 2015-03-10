exports.enrutar = function (router) {
	var rutaPreguntas = router.route('/api/preguntas/');
	var rutaPreguntaRespuestas = router.route('/api/preguntas/:pregunta/respuestas/');
	var preguntas = [{
		id: 'lenguajes',
		campo:'lenguaje',
		texto: 'Lenguaje principal'
	}, {
		id: 'intereses',
		campo:'interes',
		texto: 'Tencología de Interés'
	}, {
		id: 'profesiones',
		campo:'profesion',
		texto: 'Tu profesion'
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
				respuestas = ['C', 'Java', 'ObjectiveC', 'C#', 'Javascript', 'PHP', 'Python', 'Ruby', 'Otros'];
				break;
			case "intereses":
				respuestas = ['AngularJS', 'ReactJS', 'Bootstrap', 'Material Design', 'NodeJS', 'MongoDB', 'Otros'];
				break;
			case "profesiones":
				respuestas = ['Arquitecto de Software', 'Programador', 'Analista', 'Project Manager', 'Diseñador gráfico', 'Administrador de Sistemas', 'Otros'];
				break;
			}
			respuesta.json(respuestas);
		});

}