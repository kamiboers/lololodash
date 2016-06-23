var _ = require('lodash');

var cities = { 	Hamburg:    { population: 1.698 },
				Strasbourg: { population: 0.272 },
				Rome:       { population: 2.753 },
				Dublin:     { population: 0.528 } }

var modifiedCities = function(cities) {
	return _.forEach(cities, function(city) {
		if (city.population > 1) {
			city.size = 'big';
		} else if (city.population > 0.5) {
			city.size = 'med';
		} else {
			city.size = 'small';
		}
	});
};

module.exports = modifiedCities;