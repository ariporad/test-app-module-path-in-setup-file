/* (c) 2015 Ari Porad. Licensed under the MIT License: ariporad.mit-license.org */
require('./setup');
var express = require('express'),
	app = express();

app.use(require('body-parser').json());

require('routes').User(app);

app.listen(process.env.PORT || 3000);



