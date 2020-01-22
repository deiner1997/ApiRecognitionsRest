'use strict'
const mongoose= require('mongoose')
const app= require('./app')
const config = require('./config');
if(process.env.NODE_ENV !== "test"){
    mongoose.connect(config.db, (err, res) =>{
        if(err) {
            return console.log(`Error conecction: ${err}`)
        }
        console.log("DB Conected")
        app.listen(config.port, () =>{
            console.log(`API REST RUNNING IN ${config.port}`)
        })
        
    }) 
} else {
    mongoose.connect(config.dbtest, (err, res) =>{
        if(err) {
            return console.log(`Error conecction: ${err}`)
        }
        console.log("DB Conected")
        app.listen(config.port, () =>{
            console.log(`API REST RUNNING IN ${config.port}`)
        })
        
    }) 
}
