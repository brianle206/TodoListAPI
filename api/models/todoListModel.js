var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var listSchema = ({
	name: String,
	description: String,
	created_at: {
		type: Date, 
		default: Date.now
	}
})

mongoose.model('Lists', listSchema)