var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');
var Household = require('./household.js');

var DictatorSchema = new mongoose.Schema({
	dictator_name: {type: String, required: true, unique: true},
	owned_households: [ Household.schema ],
	facial_hair: {type: String},
	at_war: {type: Boolean}
});

DictatorSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Dictator', DictatorSchema);