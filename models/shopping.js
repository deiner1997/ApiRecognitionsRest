"use strict"

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ShoppingSchema = Schema({
    userId: {
        type: Schema.Types.ObjectId, 
        ref: 'User',
        required:"User is required"
    },
    catalogueId:{
        type: Schema.Types.ObjectId, 
        ref: 'Catalogue',
        required:"Catalogue is required"
    },
    periodId:{
        type: Schema.Types.ObjectId, 
        ref: 'Period',
        required:"Period is required"
    },
    status: {
        type: Boolean, 
        required:"status is required"
    },
    date:{type: Date, default: Date.now()}
});
module.exports = mongoose.model('Shopping', ShoppingSchema);