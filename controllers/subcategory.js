const Subcategory = require('../models/subcategory');

function getSubcategories(req, res) {
    Subcategory.find({})
        .then(subcategories => {
            return res.status(200).send({ subcategories })
        })
        .catch(err => {
            return res.status(500).send({ message: 'In db not exist subcategories', error: err })
        })
}
module.exports = {
    getSubcategories
}