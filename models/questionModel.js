const { ObjectID } = require('bson');
const mongoose = require('mongoose')

const questionSchema = new mongoose.Schema(
    {
        author: {
            type: String,
        },
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        comments: {
            type: [String],
        },
        createdAt: {
            type: Date,
            default: Date.now(),
        }
    }
)
const question = mongoose.model('question', questionSchema);
module.exports = question;