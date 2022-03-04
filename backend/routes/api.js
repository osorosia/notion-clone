var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/hello', function(req, res, next) {
  var param = {'result': 'Hello'};
  res.header('Content-Type', 'application/json; charset=utf-8');
  res.send(param);
});

module.exports = router;
