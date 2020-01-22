"use strict"

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ValuesSchema = Schema({
    title: {
        type: String,
        required:"Title is required"
    }
});
module.exports = mongoose.model('Values', ValuesSchema);