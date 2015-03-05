(function () {
	"use strict";
	
	var config = require('./config.js');
	
	var app =config.initApp();
	var router = config.initRouter(app);
	
	var root = router.route('/prueba');
	root.get(function (peticion, respuesta) {
		respuesta.send('Hola Express!');
	});

	
	require('./api/encuestas.js').enrutar(router);
	
	app.listen(3000);
}());