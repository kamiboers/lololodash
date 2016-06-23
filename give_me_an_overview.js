var _ = require('lodash');

var orderSort = function(orders) {
	return _.chain(orders)
			.groupBy('article')
			.map(function(subarray, article) {
				var total = _.reduce(subarray, function(total, subarray) {
					return total + subarray.quantity;
				}, 0);
				return 	{ article: parseInt(article), total_orders: total };
			})
	.sortBy('total_orders')
	.reverse();
}

module.exports = orderSort;