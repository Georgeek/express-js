const express = require('express'),
			router = express.Router(),
			mongo = require('mongodb').MongoClient,
			assert = require('assert'),

			url = 'mongodb://localhost:27017/test-db' ;

/* GET home page. */
router.get('/', (req, res, next) => {
	res.render('index', {
		title: 'Express form validation',
		success: req.session.success,
		errors: req.session.errors
	});
	req.session.errors = null;
	req.session.success = null;
});

router.get('/test/:id', (req, res, next) => {
	res.render('test', {output: req.params.id});
});

router.post('/test/submit', (req, res, next) => {
	let id = req.body.id
	res.redirect('/test/' + id);
});

router.post('/submit', (req, res, next) => {
	req.check('email', 'invalid email address').isEmail();
	req.check('password', 'Password is invalid').isLength({ min: 4}).equals(req.body.confirmPassword);

	let errors = req.validationErrors();
	if (errors) {
		req.session.errors = errors;
		req.session.success = false;
	} else {
		req.session.success = true;
	}
	res.redirect('/');

});

router.get('/get-data', (req, res, next) => {
	let resultArray = [];

	mongo.connect(url, (err, db) => {
		assert.equal(null, err);

		let cursor = db.collection('users').find();
		cursor.forEach(function(doc, err) {
			assert.equal(null, err);
			resultArray.push(doc);
		}, function() {
			db.close();
			res.render('index', { users : resultArray });
		});
	});
});

router.post('/insert', (req, res, next) => {
	let user = {
		username: req.body.username,
		firstName: req.body.firstName,
		lastName: req.body.lastName
	};

	mongo.connect(url, (err, db) => {
		assert.equal(null, err);
		db.collection('users').insertOne(user, (err, result) => {
			assert.equal(null, err);
			console.log('user inserted');
			db.close();
		});
	});

	res.redirect('/');
});

router.post('/update', (req, res, next) => {

});

router.post('/delete', (req, res, next) => {

});

module.exports = router;
