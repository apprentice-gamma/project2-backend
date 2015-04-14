var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');
var Household = require('./household.js');

var DictatorSchema = new mongoose.Schema({
	"dictator name": {type: String, required: true, unique: true},
	"owned households": [ Household.schema ],
	"facial hair": {type: String},
	"at war": {type: Boolean}
});

DictatorSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Dictator', DictatorSchema);