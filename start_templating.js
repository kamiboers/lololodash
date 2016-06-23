var _ = require('lodash');

var templater = function(input) {
	var text = "Hello <%= name %> (logins: <%= count %>)";
	var data = { name: input.name, count: _.size(input.login) };
	return _.template(text)(data);
}

module.exports = templater;