const { application } = require('express');
var express = require('express');
const { default: mongoose } = require('mongoose');
var router = express.Router();

const Note = require('../models/note');

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
    if (err) res.json( {result: 'ng'} );
    else {
      console.log('[POST /note/new] end---------------------------------');
      res.json({ result: 'ok' });
    }
  });
});

router.delete('/note/delete', function(req, res, next) {
  console.log('[DELETE /note/delete] start-------------------------------');
  // 削除するidを指定
  const query = { _id: req.query.id};

  // DBから削除
  Note.findOneAndRemove(query, (err) => {
    if (err) res.json({ result: 'ng' });
    else {
      console.log('[DELETE /note/delete] end---------------------------------');
      res.json({ result: 'ok' })
    };
  });
});

module.exports = router;
