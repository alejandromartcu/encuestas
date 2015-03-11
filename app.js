(function () {
    "use strict";

    var config = require('./config.js');

    var app = config.initApp();
    var router = config.initRouter(app);

    require('./api/preguntas.js').enrutar(router);
    require('./api/encuestas.js').enrutar(router);

    app.all('/*', function (req, res, next) {
        // Just send the index.html for other files to support HTML5Mode
        res.sendFile('index.html', {
            root: __dirname
        });
    });

    app.listen(3000);
}());