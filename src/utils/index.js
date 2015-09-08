/* (c) 2015 Ari Porad. Licensed under the MIT License: ariporad.mit-license.org */

module.exports.generateSecretToken = function generateSecretToken(length) {
	length = length || 50;
	var secret = '';
	while(secret.length < length) {
		secret += Math.random().toString(36).slice(2);
	}

	secret = secret.slice(0, length);

	console.log('Generated Secret: %s', secret);
	return secret;
};
