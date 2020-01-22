"use strict"

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PointTableSchema = Schema({
    userId: {
        type: Schema.Types.ObjectId, 
        ref: 'User',
        required:"User is required"
    },
    pointsTotal: 
    {
        type: Number,
        required:"User is required"
    },
    periodId:{
        type: Schema.Types.ObjectId, 
        ref: 'Period',
        required:"Period is required"
    },
    areaId:{
        type: Schema.Types.ObjectId, 
        ref: 'Area',
        required:"Area is required"
    }

});
module.exports = mongoose.model('PointTable', PointTableSchema);