"use strict"

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PositionSchema = Schema({
    name: {
        type: String,
        required:"Name is required"
    }
});
module.exports = mongoose.model('Position', PositionSchema);