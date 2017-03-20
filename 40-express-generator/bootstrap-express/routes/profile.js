var express = require('express');
var router = express.Router();

var store = require('../datas');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('profile', store.profile);
});

module.exports = router;
