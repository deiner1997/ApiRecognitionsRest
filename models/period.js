"use strict"

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PeriodSchema = Schema({
    name: {
        type: String,
        required:"Name is required"
    },
    status: {
        type: Boolean,
        required:"Status is required"
    },
    startdate: {
        type: Date, 
        required:"Start date is required"
    },
    enddate: {
        type: Date, 
        required:"End date is required"
    }
});
module.exports = mongoose.model('Period', PeriodSchema);