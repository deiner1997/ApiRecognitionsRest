"use strict"
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const RecognizeSchema = Schema({
    description: {
        type: String,
        required:"Description is required"
    },
    userAssignId: {
        type: Schema.Types.ObjectId, 
        ref: 'User',
        required:"User assign is required"
    },
    usercreateId: {
        type: Schema.Types.ObjectId, 
        ref: 'User',
        required:"User created is required"
    },
    categoryId: { 
        type: Schema.Types.ObjectId, 
        ref: 'Category'
    },
    subcategoryId: { 
        type: Schema.Types.ObjectId, 
        ref: 'Subcategory' 
    },
    status: {
        type: Boolean, 
        required:"Status is required"
    },
    periodId:{
        type: Schema.Types.ObjectId,
        ref: 'Period',
        required:"Period is required"
    },  
    sherpasNum:{
        type: Number
    },
    sherpascommittee:{
        type: Boolean,
    },
    client: {
        type: Boolean, 
    },
    valueId: { 
        type: Schema.Types.ObjectId,
        ref: 'Values', 
    },
    points: {
        type: Number
    },
    created: {type: Date, default: Date.now()}
   })
module.exports = mongoose.model('Recognize', RecognizeSchema)