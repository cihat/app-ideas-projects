var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var todoSchema = new Schema({
    title: String,
    date: String,
    completed: String,
});

module.exports = mongoose.model("todo", todoSchema);