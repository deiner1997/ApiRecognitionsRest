"use strict"

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CatalogueSchema = Schema({
    title: {
        type: String,
        required:"Title is required"
    },
    locationId:{
        type: Schema.Types.ObjectId, 
        ref: 'Location',
        required:"Location is required"
    },
    category:{
        type: String,
        required:"Category is required"
    }
});
module.exports = mongoose.model('Catalogue', CatalogueSchema);