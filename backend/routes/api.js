const { application } = require('express');
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/hello', function(req, res, next) {
  var param = {'result': 'Hello'};
  res.header('Content-Type', 'application/json; charset=utf-8');
  res.json(param);
});

const Note = require('../models/note');

router.get('/note', function(req, res, next) {
  Note.find({}, (err, note) => {
    console.log(note);
    res.json(note);
  });
});

router.post('/note/new', function(req, res, next) {
  const note = new Note({
    title: 'ahoho',
    body: 'testes',
  });
  console.log(note);
  note.save((err) => {
    if (err) console.log('ng', err);
    else console.log('ok');
  });
  
});

module.exports = router;
