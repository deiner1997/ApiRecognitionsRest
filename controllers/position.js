"use strict"
const Position = require('../models/position')
function getPositions(req, res) {
    Position.find({})
    .then(positions => {
        if (!positions) return res.status(404).send({ message: 'In db not exist positions' })
        return res.status(200).send({ positions })
    })
    .catch(err => {
        return res.status(500).send({ message: `Error when making the request`, error: err })
    })
}
function getPosition(req, res) {
    let positionId = req.params.positionId
    Position.findById(positionId)
        .then(position => {
            return res.status(200).send({ position })
        })
        .catch(err => {
            return res.status(500).send({ message: 'The Position not exist', error: err })
        })

}
module.exports = {
    getPositions,
    getPosition
}