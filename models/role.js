"use strict"
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const RoleSchema = Schema({
    name: {
        type: String,
        required:"Name is required"
    }

});
module.exports = mongoose.model('Role', RoleSchema);