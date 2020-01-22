"use strict"
const Shopping = require('../models/shopping');
const Catalogue = require('../models/catalogue');
const Period = require('../models/period')
const User = require('../models/user');
const isEmpty = require('is-empty')


function saveShopping(req, res) {
    if (!isEmpty(req.headers.userid && req.body.catalogueId)) {
        Catalogue.findById({ _id: req.body.catalogueId })
            .then(catalogue => {
                if (catalogue.length != 0) {
                    Period.find({ status: true })
                        .then(period => {
                            if (period.length != 0) {
                                User.findById({ _id: req.headers.userid })
                                    .then(user => {
                                        if (user.length != 0) {
                                            if (user.award > 0) {
                                                let shoping = new Shopping()
                                                shoping.userId = req.headers.userid
                                                shoping.catalogueId = req.body.catalogueId
                                                shoping.periodId = period[0]._id
                                                shoping.status = false
                                                shoping.save()
                                                    .then(shopingStore => {
                                                        user.award = user.award - 1;
                                                        user.save(function (err) {
                                                            if (err) return res.status(500).send({ message: "We can´t save user award", error: err })
                                                        });
                                                        return res.status(200).send({ message: "Shopping saved", shoping: shopingStore })
                                                    })
                                                    .catch(err => {
                                                        return res.status(500).send({ message: 'Error Saving the Shopping', error: err })
                                                    })
                                            } else {
                                                return res.status(500).send({ message: "You can't shopping because you doesn't have awards" })
                                            }
                                        }
                                    })
                                    .catch(err => {
                                        return res.status(500).send({ message: 'The User not exist in database', error: err })
                                    })
                            }
                        })
                        .catch(err => {
                            return res.status(500).send({ message: 'In database not exist Periods actived', error: err })
                        })
                } else {
                    return res.status(500).send({ message: 'The Catalogue not exist in database' })
                }
            })
            .catch(err => {
                return res.status(500).send({ message: 'The Catalogue not exist in database', error: err })
            })
    } else {
        return res.status(500).send({ message: 'Information required is empty' })
    }
}
function getShopping(req, res) {
    let shoppingId = req.params.shoppingId
    Shopping.findById(shoppingId)
        .then(shopping => {
            return res.status(200).send({ shopping })
        })
        .catch(err => {
            return res.status(500).send({ message: 'The Shopping not exist', error: err })
        })

}
function getShoppingsUser(req, res) {
    let userId = req.headers.userid
    User.findById({ _id: userId })
        .then(user => {
            if (user.length != 0) {
                Period.find({ status: true })
                    .then(period => {
                        if (!isEmpty(period)) {
                            Shopping.find({ userId: userId })
                                .populate("catalogueId", "_id title category", Catalogue)
                                .populate("periodId", "_id name", Period)
                                .populate("userId", "_id name", User)
                                .exec()
                                .then(shopping => {
                                    if (shopping != 0) {
                                        return res.status(200).send({ shopping })
                                    } else {
                                        return res.status(500).send({ message: 'The User not have shoppings' })
                                    }

                                })
                                .catch(err => {
                                    return res.status(500).send({ message: 'The User not have shoppings', error: err })
                                })
                        } else {
                            return res.status(500).send({ message: 'In database not exist Periods actived' })
                        }
                    })
                    .catch(err => {
                        return res.status(500).send({ message: 'In database not exist Periods actived', error: err })
                    })
            }
        })
        .catch(err => {
            return res.status(500).send({ message: 'The User not exist in database', error: err })
        })
}
function getShoppings(req, res) {
    Period.find({ status: true })
        .then(period => {
            if (!isEmpty(period)) {
                Shopping.find({ periodId: period[0]._id, status: false })
                    .populate("catalogueId", "_id title category", Catalogue)
                    .populate("periodId", "_id name", Period)
                    .populate("userId", "_id name", User)
                    .exec()
                    .then(shoppings => {
                        return res.status(200).send({ shoppings })
                    })
                    .catch(err => {
                        return res.status(500).send({ message: 'In db not exist shopings', error: err })
                    })
            } else {
                return res.status(500).send({ message: 'In database not exist Periods actived' })
            }

        })
        .catch(err => {
            return res.status(500).send({ message: 'In database not exist Periods actived', error: err })
        })
}
function updateShopping(req, res) {
    let shoppingId = req.params.shoppingId;
    Shopping.findByIdAndUpdate(shoppingId, {
        $set: {
            status: req.body.status
        }
    })
        .then(shoppingUpdated => {
            return res.status(200).send({ message: "Shopping Updated", shopping: shoppingUpdated })
        })
        .catch(err => {
            return res.status(500).send({ message: `Error while tried to update the shopping ${err}` })
        })
}
module.exports = {
    saveShopping,
    getShopping,
    getShoppings,
    getShoppingsUser,
    updateShopping
}