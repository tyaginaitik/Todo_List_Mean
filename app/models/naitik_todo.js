var mongoose = require('mongoose');
module.exports = mongoose.model('naitik_todo',{
	text: String,
	done: Boolean	
});