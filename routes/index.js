var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Welcome' });
});

/* GET application page. */
router.get('/application', function(req, res, next) {
  res.render('application', { title: 'Apply' });
});


module.exports = router;
