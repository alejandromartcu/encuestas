(function () {
    angular.module('encuestas').factory('socketFactory', function ($rootScope) {
        var socket;
        return {
            connect: function(){
				socket= io.connect();
            },
            on: function (eventName, callback) {
                socket.on(eventName, function () {
                    var args = arguments;
                    $rootScope.$apply(function () {
                        callback.apply(socket, args);
                    });
                });
            },
            emit: function (eventName, data) {
				socket.emit(eventName, data);
            }
        }
    });
}());