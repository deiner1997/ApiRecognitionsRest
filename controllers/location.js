"use strict"
const Location = require('../models/location')
const isEmpty = require('is-empty')


function saveLocation(req, res) {
    if(!isEmpty(req.body.name)){
        let location = new Location()
        location.name = req.body.name
        location.save()
        .then(locationStore => {
            return res.status(200).send({ message: "Location saved", location: locationStore })
        })
        .catch(err => {
            return res.status(500).send({ message: 'Error Saving the Location' })
        })
    } else {
        return res.status(500).send({ message: 'Information required is empty' })
    }
}
function getLocation(req, res) {
    let locationid = req.params.locationId
    Location.findById(locationid)
        .then(location => {
            return res.status(200).send({ location })
        })
        .catch(err => {
            return res.status(500).send({ message: 'The Location not exist', error: err })
        })

}
function getLocations(req, res) {
    Location.find({})
    .then(locations => {
        return res.status(200).send({ locations })
    })
    .catch(err => {
        return res.status(500).send({ message: 'In db not exist locations' })
    })
}
function deleteLocation(req, res) {
    let locationIdDelete = req.params.locationId;
    Location.findById(locationIdDelete)
        .then(locationdelete => {
            locationdelete.remove(err => {
                if (err) return res.status(500).send({ message: `Error while tried to delete the location ${err}` })
                return res.status(200).send({ message: 'location Deleted'})
            })
        })
        .catch(err => {
            res.status(500).send({ message: `Location to delete not exist in DataBases`, error: err })
        })
}
function updateLocation(req, res) {
    let update = req.body;
    let locationIdUpdate = req.params.locationId;
    Location.findByIdAndUpdate(locationIdUpdate, { $set: update })
        .then(locationupdated => {
            return res.status(200).send({ message: "Location Updated", location: locationupdated })
        })
        .catch(err => {
            return res.status(500).send({ message: `Error while tried to update the location ${err}` })
        })
}
module.exports = {
    saveLocation,
    getLocation,
    deleteLocation,
    updateLocation,
    getLocations
}