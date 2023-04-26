const mongoose = require('mongoose');

const issueSchema = mongoose.Schema({
    name: {
        type: String,
        require: true,

    },
    author: {
        type: String,
        require: true,
    },
    description: {
        type: String,
        require: true
    },
    label: [
        {
            type: String,
            // require: true
        }
    ],
    project: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Projects'
    }
}, {
    timestamps: true
})

const Issues = mongoose.model('Issue', issueSchema);
module.exports = Issues;