var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

var HouseholdSchema = new mongoose.Schema({
	"residents": [],
	"household income": {type: Number},
	"street": {type: String},
	"city": {type: String},
	"zip code": {type: Number},
	"state": {type: String},
	"number of bathrooms": {type: Number},
	"favorite pizza": {type: String, required: true}
	"party house": {type: Boolean}
});

HouseholdSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Household', HouseholdSchema);