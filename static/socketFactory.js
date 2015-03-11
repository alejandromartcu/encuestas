(function () {
    angular.module('encuestas').factory('socketFactory', function ($rootScope) {
        var socket;
        return {
            connect: function(){
				console.log("Conectando..." );
                socket= io.connect();
				console.log("Conectado !" );
            },
            on: function (eventName, callback) {
                socket.on(eventName, function () {
                    var args = arguments;
                    console.log(eventName );
                    console.log("canal: " + eventName );
                    console.log(" datos: " + JSON.stringify(args) );
					$rootScope.$apply(function () {
                        callback.apply(socket, args);
                    });
                });
            },
            emit: function (eventName, data) {
				console.log("Emitiendo..." );
                socket.emit(eventName, data);
				console.log("Emitido !" );
            }
        }
    });
}());