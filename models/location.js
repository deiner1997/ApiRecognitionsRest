"use strict"

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const LocationSchema = Schema({
    name: {
        type: String,
        required:"Name is required"
    }
});
module.exports = mongoose.model('Location', LocationSchema);