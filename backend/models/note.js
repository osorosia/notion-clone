const mongoose = require('mongoose');

const NoteSchema = mongoose.Schema({
    title: String,
    body: [
        {
            text: String,
        }
    ],
});

module.exports = mongoose.model('Note', NoteSchema);
