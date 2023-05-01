const { Schema, model } = require('mongoose');

const todoList = model('todoList', new Schema({
    itemname: String,
    description: String,
    complete: Boolean
}));

module.exports = todoList;