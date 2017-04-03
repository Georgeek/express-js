const express = require('express'),
			router = express.Router();

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

module.exports = router;
