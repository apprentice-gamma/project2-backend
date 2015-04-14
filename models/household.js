var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

var HouseholdSchema = new mongoose.Schema({
	residents: [],
	household_income: {type: Number},
	street: {type: String},
	city: {type: String},
	zip_code: {type: Number},
	state: {type: String},
	number_of_bathrooms: {type: Number},
	favorite_pizza: {type: String, required: true},
	party_house: {type: Boolean}
});

HouseholdSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Household', HouseholdSchema);