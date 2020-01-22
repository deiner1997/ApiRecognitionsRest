"use strict"
const Period = require('../models/period');
const isEmpty = require('is-empty')


function savePeriod(req, res) {
    
    if(!isEmpty(req.body.status && req.body.name && req.body.startdate && req.body.enddate)){
        if(req.body.status === "true" || req.body.status === true){
            Period.find({ status: true})
            .then(periods => {
                    if(periods.length >  0){
                        return res.status(500).send({ message: "You can't have two periods actived"})
                    } else {
                        savePeriodDouble(req,res);
                    }
            })
            .catch(err => {
                return res.status(500).send({ message: 'In db not exist periods', error: err })
            })
           
        } else {
            savePeriodDouble(req,res);
        }
    } else {
        return res.status(500).send({ message: "Information required is empty." })
    }
}
function getPeriod(req, res) {
    let periodid = req.params.periodId;
    Period.findById(periodid)
        .then(period => {
            return res.status(200).send({ period })
        })
        .catch(err => {
            return res.status(500).send({message: 'The Period not exist', error: err })
        })

}
function getPeriods(req, res) {
    Period.find({})
    .then(periods => {
        return res.status(200).send({ periods })
    })
    .catch(err => {
        return res.status(500).send({ message: 'In db not exist periods', error: err })
    })
}
function getActivedPeriod(req, res) {
    Period.findOne({status: true})
    .then(period => {
        if(!isEmpty(period)){
            return res.status(200).send({ period })
        } else {
            return res.status(500).send({ message: 'In db not exist periods actived'})
        }
       
    })
    .catch(err => {
        return res.status(500).send({ message: 'In db not exist periods actived', error: err })
    })
}
function deletePeriod(req, res) {
    let periodIdDelete = req.params.periodId;
    Period.findById(periodIdDelete)
        .then(perioddelete => {
            perioddelete.remove(err => {
                return res.status(200).send({ message: 'period Deleted'})
            })
        })
        .catch(err => {
            res.status(500).send({ message: `Period to delete not exist in DataBases`, error: err })
        })
}
function updatePeriod(req, res) {
    let update = req.body;
    let periodIdUpdate = req.params.periodId;
    if(req.body.status === "true" || req.body.status === true){
    Period.find({ status: true})
        .then(periods => {
                if(periods.length >  0){
                    return res.status(500).send({ message: "You can't have two periods actived"})
                } else {
                    updatePeriodDouble(req,res,periodIdUpdate, update);
                }
        })
        .catch(err => {
            return res.status(500).send({ message: 'In db not exist periods', error: err })
        })
    
    } else {
        updatePeriodDouble(req,res,periodIdUpdate, update);
    }
}
function savePeriodDouble(req,res){
    let period = new Period()
    period.name = req.body.name
    period.startdate = req.body.startdate
    period.enddate = req.body.enddate
    period.status = req.body.status
    period.save()
    .then(periodStore =>{
        return res.status(200).send({ message: "Period saved", period: periodStore })
    })
    .catch(err =>{
        return res.status(500).send({ message: 'Error saving Period data', error: err})
    })
}
function updatePeriodDouble(req,res,periodIdUpdate, update){
    Period.findByIdAndUpdate(periodIdUpdate, { $set: update })
        .then(periodupdated => {
            return res.status(200).send({ message: "Period Updated", period: periodupdated })
        })
        .catch(err => {
            return res.status(500).send({ message: `Error while tried to update the period`, error: err})
        })
}
module.exports = {
    savePeriod,
    getPeriod,
    deletePeriod,
    updatePeriod,
    getPeriods,
    getActivedPeriod
}