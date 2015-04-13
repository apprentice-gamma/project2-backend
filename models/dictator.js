var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

var DictatorSchema = new mongoose.Schema({
	dictator_name: {type: String, required: true, unique: true},
	owned_households: [],
	facial_hair: {type: String},
	at_war: {type: Boolean}
});

DictatorSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Dictator', DictatorSchema);