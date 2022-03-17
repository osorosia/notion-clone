const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const NoteSchema = mongoose.Schema({
    title: {type: String, default: ''},
    note_id: Number,
    body: [
        {
            text: {type: String, default: ''},
            style: {type: String, default: ''},
            font: {type: [String], default: []},
        },
    ],
});

NoteSchema.plugin(AutoIncrement, { inc_field: 'note_id' });
module.exports = mongoose.model('Note', NoteSchema);
