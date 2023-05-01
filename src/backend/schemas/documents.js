const { Schema, model } = require('mongoose');

const documents = model('documents', new Schema({
    documentName: String,
    progress: Number
}));

module.exports = documents;