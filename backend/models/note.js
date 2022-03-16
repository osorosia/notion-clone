const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const NoteSchema = mongoose.Schema({
    title: {type: String, default: ''},
    note_id: Number,
    body: [
        {
            text: {type: String, default: ''},
            style: {type: String, default: ''},
            font: {
                bold: {type: Boolean, default: false},
                underline: {type: Boolean, default: false},
                border: {type: Boolean, default: false},
                itaric: {type: Boolean, default: false},
                strike: {type: Boolean, default: false},
            },
        }
    ],
});

NoteSchema.plugin(AutoIncrement, { inc_field: 'note_id' });
module.exports = mongoose.model('Note', NoteSchema);
