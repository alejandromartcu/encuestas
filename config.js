"use strict";
var express = require('express');
var bodyParser = require('body-parser');

var options = {
	extensions: ['htm', 'html'],
	maxAge: '1d',
	setHeaders: function (res, path, stat) {
		res.set('x-timestamp', Date.now())
	}
};

exports.initApp = function() {
	
	var app = express();
	app.use(express.static(__dirname + '/static', options));


	app.use(bodyParser.urlencoded({
		extended: true
	}));
	app.use(bodyParser.json());

	app.use(function (peticion, respuesta, siguiente) {
		console.log("recibida petición: " + peticion.method + " " + peticion.url);
		if (peticion.body) {
			console.log("body: " + JSON.stringify(peticion.body));
		}
		siguiente();
	});
	return app;
}

exports.initRouter = function(app) {
	var router = express.Router();
	app.use(router);
	return router;
}
