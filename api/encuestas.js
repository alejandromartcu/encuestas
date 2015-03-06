var encuestas = require('../data/encuestas.js');
var MongoClient = require('mongodb').MongoClient;


exports.enrutar = function (router) {
    var rutaEncuestas = router.route('/api/encuestas/');


    rutaEncuestas
        .get(function (peticion, respuesta) {
            MongoClient.connect("mongodb://localhost:27017/encuesta", function (err, db) {
                if (!err) {
                    var collection = db.collection('encuesta');
                    collection.find().toArray(function (err, result) {
                        respuesta.json(result);
                    });
                } else {
                    console.log(err);
                }
            });
            //respuesta.json(encuestas.selectAll());
        }).post(function (peticion, respuesta) {
            // Rellenar una encuesta
            MongoClient.connect("mongodb://localhost:27017/encuesta", function (err, db) {
                if (!err) {
                    var collection = db.collection('encuesta');
                    collection.insert(peticion.body, function(err, result) {
                        respuesta.json(result);
                    });
                } else {
                    console.log(err);
                }
            });
        });

}