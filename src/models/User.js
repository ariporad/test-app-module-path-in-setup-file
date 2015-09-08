/* (c) 2015 Ari Porad. Licensed under the MIT License: ariporad.mit-license.org */

var utils = require('utils');

module.exports = function (username, password, email) {
	var secretTokens = [];

	function makeSecretToken() {
		var token = utils.generateSecretToken(50);
		secretTokens.push(token);
		return token;
	}

	function validateToken(token) {
		return secretTokens.indexOf(token) > -1;
	}

	function validatePassword(pass) {
		if (password === pass) return makeSecretToken();
		else return false;
	}

	return {
		type: 'User',
		username: username,
		email: email,
		validatePassword: validatePassword,
		validateToken: validateToken
	}
}