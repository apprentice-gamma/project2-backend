var express = require('express');
var router = express.Router();
var Dictator = require('../models/dictator.js');

/* GET dictator listing. */
router.get('/', function(req, res, next) {
	Dictator.find(function (err, dictator) {
		if(err) return next(err);
		res.json(dictator);
	});
});

/* POST dictator listing */



module.exports = router;
