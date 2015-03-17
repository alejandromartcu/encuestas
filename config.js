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
	return app;
}

exports.initRouter = function(app) {
	var router = express.Router();
	app.use(router);
	return router;
}

exports.initIO = function(app){
	var server = require('http').Server(app);
	var io = require('socket.io')(server);
	function conectar(socket) {
		var saludo = {
			serverPid: process.pid,
			date: new Date()
		};
		socket.emit('wellcome', saludo);
		socket.on('postedData', function (data) {
			emitirCanalMensaje(socket,"updateTutti",saludo);
		});
	}
	io.on("connect", conectar);

	function emitirCanalMensaje(socket,canal, mensaje) {
		io.sockets.emit(canal, mensaje);
        socket.emit(canal, mensaje);
	}
	return server;
}
