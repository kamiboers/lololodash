var _ = require('lodash');

var sortTemps = function (collection) {
	
	var sorted = {
 					hot: [],
 					warm: [] 
				 };

	var hot = function(temp) {
		return (temp > 19);
	}

	_.forEach(collection, function(temps, name) {
		if (_.every(temps, hot)) {
			sorted.hot.push(name);
		} else if (_.some(temps, hot)) {
			sorted.warm.push(name);
		}
	});

	return sorted;

};

module.exports = sortTemps;