var express = require('express');
var router = express.Router();
var Dictator = require('../models/dictator.js');
var Household = require('../models/household.js');

/* GET dictator listing. */
router.get('/', function(req, res, next) {
	Dictator.find(function (err, dictators) {
		if(err) return next(err);
		res.json(dictators);
	});
});

/* POST dictator listing */
router.post('/', function(req, res, next){
	Dictator.create(req.body, function(err, newDictator){
		if (err) return next(err);
		res.json(newDictator);
	});
});

// GET single dictator
router.get('/:id', function(req, res, next){
	Dictator.findById(req.params.id, function (err, dictator){
		if(err) return next (err);
		res.json(dictator);
	});
});

// GET owned households
router.get('/:id/households', function(req, res, next){
	Dictator.findById(req.params.id, function (err, dictator){
		if(err) return next (err);
		res.json(dictator.owned_households);
	});
});

// POST owned household
router.post('/:id/households', function(req, res, next){
	Dictator.findById(req.params.id, function (err, dictator){
		Household.create(req.body, function(err, newHousehold){
			dictator.owned_households.push(newHousehold);
			dictator.save(function (err){
				if (err) return next (err);
				res.json({message: "This worked!"});
			});
		});
	});
});

// GET single household
router.get('/:id/households/:household_id', function (req, res, next) {
 	Dictator.findOne({_id: req.params.id}, {owned_households: {$elemMatch: {_id: req.params.household_id}}}, function(err, house) {
		if (err) return next (err);
		res.json(house.owned_households[0]);
 	});
 });

//DELETE for now
router.delete('/:id', function (req, res, next){
	Dictator.findByIdAndRemove(req.params.id, req.body, function (err, dictator){
		if (err) return next(err);
		res.json(dictator);
	});
});

module.exports = router;
