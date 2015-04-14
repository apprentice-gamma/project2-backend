var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

var UserSchema = new mongoose.Schema({
	first_name: {type: String, required: true},
	last_name: {type: String, required: true},
	alias: {type: String},
	espionage_loyalty: {type: String},
	age: {type: Number},
	gender: {type: String},
	email: {type: String}
	
});

UserSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', UserSchema);