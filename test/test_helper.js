const mongoose = require("mongoose");
const config = require("../config");
before(done => {
    mongoose.connect(config.dbtest);
    mongoose.connection
    .once("open", () => {
        console.log("DB test connected");
        done();
    })
    .on("error", err => {
        console.warn("Warning" ,err);
    });
})