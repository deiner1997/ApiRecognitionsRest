"use strict"
const Area = require('../models/area')



/*function saveArea(req, res) {
    let area = new Area()
    area.name = req.body.name
    area.save((err, areaStore) => {
        if (err) res.status(500).send({ message: 'Error while send data' })
        res.status(200).send({ message: "Area saved", area: areaStore })
    })
}*/
function getArea(req, res) {
    let areaid = req.params.areaId
    Area.findById(areaid)
        .then(area => {
            if (!area) return res.status(404).send({ message: 'The area not exist' })
            return res.status(200).send({ area })
        })
        .catch(err => {
            return res.status(500).send({ message: `Error when making the request`, error: err })
        })

}
function getAreas(req, res) {
    Area.find({})
    .then(areas => {
        if (!areas) return res.status(404).send({ message: 'In db not exist areas' })
        return res.status(200).send({ areas })
    })
    .catch(err => {
        return res.status(500).send({ message: `Error when making the request`, error: err })
    })
}
/*function deleteArea(req, res) {
    let areaIdDelete = req.params.areaId;
    Area.findById(areaIdDelete)
        .then(areadelete => {
            areadelete.remove(err => {
                if (err) return res.status(500).send({ message: `Error while tried to delete the area ${err}` })
                return res.status(200).send({ message: 'area Deleted', areadelete})
            })
        })
        .catch(err => {
            res.status(500).send({ message: `Area to delete not exist in DataBases`, error: err })
        })
    }*/
/*function updateArea(req, res) {
    let update = req.body;
    let areaIdUpdate = req.params.areaId;
    Area.findByIdAndUpdate(areaIdUpdate, { $set: update })
        .then(areaupdated => {
            res.status(200).send({ message: "Area Updated", area: areaupdated })
        })
        .catch(err => {
            return res.status(500).send({ message: `Error while tried to update the area ${err}` })
        })
}*/
module.exports = {
    //saveArea,
    getArea,
    //deleteArea,
    //updateArea,
    getAreas
}