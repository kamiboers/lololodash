var _ = require('lodash');

var sortedWords = 	function(words) {
	return _.chain(words).sort().map(function(word) {
		return word.toUpperCase() + "CHAINED";
	});
};

module.exports = sortedWords;