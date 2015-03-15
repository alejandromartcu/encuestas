(function () {
	"use strict";

	var config = require('./config.js');
	var app = config.initApp();
	var router = config.initRouter(app);
	var server = config.initIO(app);
	
	require('./api/preguntas.js').enrutar(router);
	require('./api/encuestas.js').enrutar(router);
	
	var port = process.env.PORT || 3000;
	server.listen(port);
}());
