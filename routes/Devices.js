var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('Devices', { title: 'Search Results' });
});

module.exports = router;
