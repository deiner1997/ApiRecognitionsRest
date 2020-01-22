const Category = require('../models/category');

function getCategories(req, res) {
    Category.find({})
        .then(categories => {
            return res.status(200).send({ categories })
        })
        .catch(err => {
            return res.status(500).send({ message: 'In db not exist categories', error: err })
        })
}
module.exports = {
    getCategories
}