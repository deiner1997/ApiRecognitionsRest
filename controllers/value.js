const Value = require('../models/values');

function getValues(req, res) {
    Value.find({})
        .then(values => {
            return res.status(200).send({ values })
        })
        .catch(err => {
            return res.status(500).send({ message: 'In db not exist values', error: err })
        })
}
module.exports = {
    getValues
}