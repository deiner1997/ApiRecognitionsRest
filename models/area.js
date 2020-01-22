"use strict"

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const AreaSchema = Schema({
    name: {
        type: String,
        required:"Name is required"
    }
});
module.exports = mongoose.model('Area', AreaSchema);