"use strict"
const Catalogue = require('../models/catalogue');
const Location = require('../models/location');
const isEmpty = require('is-empty')



function saveCatalogue(req, res) {
    if (!isEmpty(req.body.title && req.body.category && req.body.locationId)) {
        Location.findById({ '_id': req.body.locationId })
            .then(location => {
                if (!isEmpty(location)) {
                    let catalogue = new Catalogue()
                    catalogue.title = req.body.title
                    catalogue.locationId = req.body.locationId
                    catalogue.category = req.body.category
                    catalogue.save()
                        .then(catalogueStore => {
                            return res.status(200).send({ message: "Catalogue saved", catalogue: catalogueStore })
                        })
                        .catch(err => {
                            return res.status(500).send({ message: 'Error Saving the Catalogue', error: err })
                        })
                } else {
                    return res.status(500).send({ message: 'Location not exist in Database' })
                }

            })
            .catch(err => {
                return res.status(500).send({ message: 'Error searching the location in Database', error: err })
            })
    } else {
        return res.status(500).send({ message: 'Information required is empty' });
    }
}
function getCatalogue(req, res) {
    let catalogueid = req.params.catalogueId
    Catalogue.findById(catalogueid)
        .populate("locationId", "_id name", Location)
        .exec()
        .then(catalogue => {
            return res.status(200).send({ catalogue })
        })
        .catch(err => {
            return res.status(500).send({ message: 'The Catalogue not exist', error: err })
        })

}
function getCataloguesByCategoryandLocation(req, res) {
    let category = req.params.category;
    let location = req.params.locationId;
    Catalogue.find({category: category, locationId: location})
        .populate("locationId", "_id name", Location)
        .exec()
        .then(catalogues => {
            return res.status(200).send({ catalogues })
        })
        .catch(err => {
            return res.status(500).send({ message: 'In db not exist catalogues', error:err })
        })
}

function getCatalogues(req, res) {
    Catalogue.find({})
        .populate("locationId", "_id name", Location)
        .exec()
        .then(catalogues => {
            return res.status(200).send({ catalogues })
        })
        .catch(err => {
            return res.status(500).send({ message: 'In db not exist catalogues' })
        })
}
function deleteCatalogue(req, res) {
    let catalogueIdDelete = req.params.catalogueId;
    Catalogue.findById(catalogueIdDelete)
        .then(cataloguedelete => {
            cataloguedelete.remove(err => {
                if (err) return res.status(500).send({ message: `Error while tried to delete the catalogue`, error: err })
                return res.status(200).send({ message: 'Catalogue Deleted' })
            })
        })
        .catch(err => {
            res.status(500).send({ message: `Catalogue to delete not exist in DataBases`, error: err })
        })
}
function updateCatalogue(req, res) {
    let update = req.body;
    let catalogueIdUpdate = req.params.catalogueId;
    Catalogue.findByIdAndUpdate(catalogueIdUpdate, { $set: update })
        .then(catalogueupdated => {
            return res.status(200).send({ message: "Catalogue Updated", catalogue: catalogueupdated })
        })
        .catch(err => {
            return res.status(500).send({ message: `Error while tried to update the catalogue`, error: err })
        })
}
module.exports = {
    saveCatalogue,
    getCatalogue,
    deleteCatalogue,
    updateCatalogue,
    getCatalogues,
    getCataloguesByCategoryandLocation
}