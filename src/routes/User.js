/* (c) 2015 Ari Porad. Licensed under the MIT License: ariporad.mit-license.org */
var User = require('models/User');

var users = {};

module.exports = function (app) {
	app.get('/users', function (req, res) {
		res.json(Object.keys(users));
	})
	app.post('/users', function (req, res) {
		users[req.body.username] = new User(req.body.username, req.body.password, req.body.email);
		res.json({ ok: true, id: req.body.username });
	});
	
	app.get('/users/:id/login', function (req, res) {
		var user = users[req.params.id];
		if (!user) return res.json({ ok: false });
		var token = user.validatePassword(req.body.password);
		if (token) {
			res.json({ ok: true, token: token });
		} else {
			res.json({ ok: false });
		}
	});

	app.get('/users/:id', function (req, res) {
		var token = req.body.token || req.body.auth;
		if (users[req.params.id].validateToken(token)) {
			var user = users[req.params.id];
			res.json({ 
				ok: true,
				data: {
					username: user.username,
					email: user.email
				}
			});
		} else res.json({ ok: false });
	})
}