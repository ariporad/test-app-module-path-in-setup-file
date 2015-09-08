require('app-module-path').addPath(__dirname);
/* (c) 2015 Ari Porad. Licensed under the MIT License: ariporad.mit-license.org */
var express = require('express'),
	app = express();

app.use(require('body-parser').json());

require('routes').User(app);

app.listen(process.env.PORT || 3000);



