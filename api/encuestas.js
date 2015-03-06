var encuestas = require('../data/encuestas.js');
var MongoClient = require('mongodb').MongoClient;
var mongoUrl = "mongodb://localhost:27017/encuesta";
var mongoCol = "encuesta";

exports.enrutar = function (router) {
    var rutaEncuestas = router.route('/api/encuestas/');


    rutaEncuestas
        .get(function (peticion, respuesta) {
            MongoClient.connect(mongoUrl, function (err, db) {
                if (!err) {
                    var collection = db.collection(mongoCol);
                    collection.find().toArray(function (err, result) {
                        respuesta.json(result);
                    });
                } else {
                    console.log(err);
                }
            });
        }).post(function (peticion, respuesta) {
            MongoClient.connect(mongoUrl, function (err, db) {
                if (!err) {
                    var collection = db.collection(mongoCol);
                    collection.insert(peticion.body, function(err, result) {
                        respuesta.json(result);
                    });
                } else {
                    console.log(err);
                }
            });
        });

}