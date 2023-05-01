const { Schema, model } = require('mongoose');

const goals = model('goals', new Schema({
    goalname: String,
    progress: Number
}));

module.exports = goals;