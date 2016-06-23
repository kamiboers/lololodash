var _ = require('lodash');

var commentSort = function(comments) {
	var result = 	_.chain(comments)
					.groupBy('username')
					.map(function(subarray, name) {
					return {username: name, comment_count: _.size(subarray) };
					})
					.sortBy(function(array){
						return array['comment_count'];
						})
					.reverse();
	return result;
}

module.exports = commentSort;