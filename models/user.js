"use strict"

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = Schema({
    email: {
        type: String,
        unique: true,
        lowercase: true,
        required:"Email is required"
    },
    username: {
        type: String,
        unique: true,
        lowercase: true,
        required:"Username is required"
    },
    name: {
        type: String,
        required:"Username is required"
    },
    password: {
        type: String,
        select: true,
        required:"password is required"
    },
    singupDate: {type: Date, default: Date.now()},
    Role: { 
        type: Schema.Types.ObjectId, 
        ref: 'Role',
        required:"User created is required"
    },
    Location: { 
        type: Schema.Types.ObjectId, 
        ref: 'Location',
        required:"Location is required"
    },
    status: {
        type: Boolean, 
        required:"status is required"
    },
    Area: { 
        type: Schema.Types.ObjectId, 
        ref: 'Area',
        required:"Area is required"
    },
    Position: { 
        type: Schema.Types.ObjectId, 
        ref: 'Position',
        required:"Area is required"
    },
    award:{
        type: Number
    }

});
module.exports = mongoose.model('User', UserSchema);
