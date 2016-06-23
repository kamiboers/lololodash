var _ = require('lodash');

var categorizeIncome = function(collection) {
	var averageIncome = _.reduce(collection, function(total, data){
		return total + data.income;
	}, 0)/_.size(collection);
	var collection = _.sortBy(collection, 'income')

	var unders = _.filter(collection, function(employee){
		return employee.income <= averageIncome
	});
	var overs = _.filter(collection, function(employee){
		return employee.income > averageIncome
	});

	var result = { average: averageIncome, underperform: unders, overperform: overs };
	return result;

}

module.exports = categorizeIncome