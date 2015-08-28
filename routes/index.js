var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/dashboard', function(req, res, next) {
  res.render('dashboard', { title: 'Dashboard' });
});

router.get('/twitter', function(req, res, next) {
  res.render('twitter', { title: 'Dashboard' });
});


module.exports = router;
