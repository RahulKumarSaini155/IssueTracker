const mongoose = require('mongoose');

const projectSchema = mongoose.Schema({
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
    issue: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Issue'
        }
    ]
}, {
    timestamps: true
})

const Projects = mongoose.model('Projects', projectSchema);
module.exports = Projects;