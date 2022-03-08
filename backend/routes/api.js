const { application } = require('express');
var express = require('express');
var router = express.Router();

const Note = require('../models/note');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/hello', function(req, res, next) {
  var param = {'result': 'Hello'};
  res.header('Content-Type', 'application/json; charset=utf-8');
  res.json(param);
});

router.get('/note/test', function(req, res, next) {
  console.log('[/note/test] start------------------------');
  const note1 = new Note({
    title: 'aaaaa',
    body: 'bbbbbbbbb',
  });
  const note2 = new Note({
    title: 'cccc',
    body: 'dddddddddd',
  });
  console.log('[/note/test] end--------------------------');
  res.json([note1, note2]);
});

router.get('/note', function(req, res, next) {
  console.log('[GET /note] start---------------------------------');
  // クエリパラメータ作成
  console.log(req.query);
  let query = {};
  if (req.query._id) query._id = req.query;
  if (req.query.title) query.title = req.query.title;

  // DBから取得
  Note.find(query, (err, note) => {
    console.log(note);
    console.log('[GET /note] end-----------------------------------');
    res.json(note);
  });
});

router.post('/note/new', function(req, res, next) {
  console.log('[POST /note/new] start---------------------------------');
  //  req.bodyからNoteモデル作成
  const note = new Note(req.body);
  console.log(note);

  // DBに保存
  note.save((err) => {
    if (err) {
      console.log(err);
      res.json( {result: 'ng'} );
    }
    else {
      console.log('[POST /note/new] end---------------------------------');
      res.json({ result: 'ok' });
    }
  });
});

module.exports = router;
