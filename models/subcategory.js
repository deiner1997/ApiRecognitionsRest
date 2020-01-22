"use strict"

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const SubcategorySchema = Schema({
    title: {
        type: String,
        required:"Title is required"
    }
});
module.exports = mongoose.model('Subcategory', SubcategorySchema);