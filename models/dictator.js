var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

var DictatorSchema = new mongoose.Schema({
	"dictator name": {type: String, required: true, unique: true},
	"owned households": [],
	"facial hair": {type: String},
	"at war": {type: Boolean}
});

DictatorSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Dictator', DictatorSchema);