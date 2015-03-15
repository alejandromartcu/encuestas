var MongoClient = require('mongodb').MongoClient;
//var mongoUrl = "mongodb://localhost:27017/academiabinaria";
var mongoUrl ="mongodb://academiabinaria:academiabinaria@ds039311.mongolab.com:39311/academiabinaria";
var mongoCol = "encuestas";



exports.selectAll = function (respuesta) {
	MongoClient.connect(mongoUrl, function (err, db) {
		if (!err) {
			var collection = db.collection(mongoCol);
			collection.find().toArray(function (err, result) {
				respuesta.json(result);
			});
		} else {
			console.error(err);
			respuesta.status(500).send(err);
		}
	});
}

exports.groupBy = function (campo, respuesta) {
	MongoClient.connect(mongoUrl, function (err, db) {
		if (!err) {
			var collection = db.collection(mongoCol);
			collection.aggregate([{
				$group: {
					_id: "$" + campo ,
					count: {
						$sum: 1
					}
				}
			}],function (err, result) {
				respuesta.json(result);
			});
		} else {
			console.error(err);
			respuesta.status(500).send(err);
		}
	});
}

exports.insert = function (encuesta, respuesta) {
	MongoClient.connect(mongoUrl, function (err, db) {
		if (!err) {
			var collection = db.collection(mongoCol);
			collection.insert(encuesta, function (err, result) {
				if (!err) {
					console.log(JSON.stringify(result[0]._id));
					respuesta.json(result[0]._id);
				} else {
					console.error(err);
					respuesta.status(500).send(err);
				}
			});
		} else {
			console.error(err);
			respuesta.status(500).send(err);
		}
	});
}