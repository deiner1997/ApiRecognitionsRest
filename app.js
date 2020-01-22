"use strict"
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const cors = require('cors')
const api = require('./routes')
const passport = require('passport')
const cookieParser = require("cookie-parser")
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(cookieParser('secret'));
app.use(cors({
    'allowedHeaders': ['sessionId', 'Content-Type', 'Authorization','userid'],
    'exposedHeaders': ['sessionId'],
    'origin': '*',
    'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
    'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8',
    "Access-Control-Allow-Headers":"Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With",
    'preflightContinue': false
  }));
app.use("/", api)
app.use(passport.initialize());
app.use(passport.session());

module.exports = app