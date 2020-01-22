"use strict"
const Recognize = require('../models/recognize');
const User = require('../models/user');
const PointsTable = require('../models/pointsTable');
const Period = require('../models/period');
const Category = require('../models/category');
const SubCategory = require('../models/subcategory');
const Values = require('../models/values');
const Area = require('../models/area');
const isEmpty = require('is-empty')
function getRecognizesAssignToUserId(req, res) {
    Period.findOne({ status: true })
        .then(period => {
            Recognize.find({ userAssignId: req.headers.userid, status: true, periodId: period._id })
                .populate("userAssignId", "id name status", User)
                .populate("usercreateId", "_id name status", User)
                .populate("categoryId", Category)
                .populate("subcategoryId", SubCategory)
                .populate("valueId", Values)
                .populate("periodId", "_id name", Period)
                .exec()
                .then(recognitions => {
                    return res.status(200).send({ recognitions })
                })
                .catch(err => {
                    return res.status(500).send({ message: 'In db not exist Recognitions for this user', err })
                })
        })
        .catch(err => {
            return res.status(500).send({ message: 'In db not exist Period actived', err })
        })
}
function getRecognizesCreatedToUserId(req, res) {
    Period.findOne({ status: true })
        .then(period => {
            Recognize.find({ usercreateId: req.headers.userid, status: true, periodId: period._id })
                .populate("userAssignId", "id name status", User)
                .populate("usercreateId", "_id name status", User)
                .populate("categoryId", Category)
                .populate("subcategoryId", SubCategory)
                .populate("valueId", Values)
                .populate("periodId", "_id name", Period)
                .exec()
                .then(recognitions => {
                    return res.status(200).send({ recognitions })
                })
                .catch(err => {
                    return res.status(500).send({ message: 'In db not exist Recognitions for this user', err })
                })
        })
        .catch(err => {
            return res.status(500).send({ message: 'In db not exist Period actived', err })
        })
}
function getRecognizesPendingToUserId(req, res) {
    Period.findOne({ status: true })
        .then(period => {
            Recognize.find({ usercreateId: req.headers.userid, status: false, periodId: period._id })
                .populate("userAssignId", "id name status", User)
                .populate("usercreateId", "_id name status", User)
                .populate("categoryId", Category)
                .populate("subcategoryId", SubCategory)
                .populate("valueId", Values)
                .populate("periodId", "_id name", Period)
                .exec()
                .then(recognitions => {
                    return res.status(200).send({ recognitions })
                })
                .catch(err => {
                    return res.status(500).send({ message: 'In db not exist Recognitions pending for this user', err })
                })
        })
        .catch(err => {
            return res.status(500).send({ message: 'In db not exist Period actived', err })
        })
}
function tableAcomulatedOneUserActualPeriod(req, res) {
    Period.findOne({ status: true })
        .then(period => {
            PointsTable.find({ userId: req.params.userId, periodId: period._id })
                .populate("userId", "id name status", User)
                .populate("areaId", Area)
                .populate("periodId", "_id name", Period)
                .exec()
                .then(recognitions => {
                    return res.status(200).send({ recognitions })
                })
                .catch(err => {
                    return res.status(500).send({ message: 'In db not exist Recognitions for this user in the actual Period', err })
                })
        })
        .catch(err => {
            return res.status(500).send({ message: 'In db not exist Period actived', err })
        })
}
function tableAcomulatedAllUserActualPeriod(req, res) {
    Period.findOne({ status: true })
        .then(period => {
            PointsTable.find({ areaId: req.params.areaId, periodId: period._id})
                .populate("userId", "id name status", User)
                .populate("areaId", Area)
                .populate("periodId", "_id name", Period)
                .sort( { pointsTotal: -1 } )
                .exec()
                .then(recognitions => {
                    return res.status(200).send({ recognitions })
                })
                .catch(err => {
                    return res.status(500).send({ message: 'In db not exist Recognitions for actual period', err })
                })
        })
        .catch(err => {
            return res.status(500).send({ message: 'In db not exist Period actived', err })
        })
}
function tableAcomulatedAllUserSelectPeriod(req, res) {
    PointsTable.find({ areaId: req.params.areaId, periodId: req.params.periodId })
        .populate("userId", "id name status", User)
        .populate("areaId", Area)
        .populate("periodId", "_id name", Period)
        .sort( { pointsTotal: -1 } )
        .exec()
        .then(recognitions => {
            return res.status(200).send({ recognitions })
        })
        .catch(err => {
            return res.status(500).send({ message: 'In db not exist Recognitions for this user in the actual Period', err })
        })
}
function tableAcomulatedOneUserSelectPeriod(req, res) {
    PointsTable.find({ userId: req.params.userId, periodId: req.params.periodId })
        .populate("userId", "id name status", User)
        .populate("areaId", Area)
        .populate("periodId", "_id name", Period)
        .exec()
        .then(recognitions => {
            return res.status(200).send({ recognitions })
        })
        .catch(err => {
            return res.status(500).send({ message: 'In db not exist Recognitions for this user in the actual Period', err })
        })
}
function getRecognizesByUser(req, res) {
    Period.findOne({ status: true })
        .then(period => {
            Recognize.find({ userAssignId: req.params.userId, status: true, periodId: period._id })
                .populate("userAssignId", "_id name status", User)
                .populate("usercreateId", "_id name status", User)
                .populate("categoryId", Category)
                .populate("subcategoryId", SubCategory)
                .populate("valueId", Values)
                .populate("periodId", "_id name", Period)
                .exec()
                .then(recognitions => {
                    return res.status(200).send({ recognitions })
                })
                .catch(err => {
                    return res.status(500).send({ message: 'In db not exist Recognitions for this user', err })
                })
        })
        .catch(err => {
            return res.status(500).send({ message: 'In db not exist Period actived', err })
        })
}
function getRecognizesByUserPeriod(req, res) {
    Period.findById({ _id: req.params.periodId })
        .then(period => {
            Recognize.find({ userAssignId: req.params.userId, status: true, periodId: period._id })
                .populate("userAssignId", "_id name status", User)
                .populate("usercreateId", "_id name status", User)
                .populate("categoryId", Category)
                .populate("subcategoryId", SubCategory)
                .populate("valueId", Values)
                .populate("periodId", "_id name", Period)
                .exec()
                .then(recognitions => {
                    return res.status(200).send({ recognitions })
                })
                .catch(err => {
                    return res.status(500).send({ message: 'In db not exist Recognitions for this user', err })
                })
        })
        .catch(err => {
            return res.status(500).send({ message: 'In db not exist Period actived', err })
        })
}
function searchByMonth(req, res) {
    Period.findOne({ status: true })
        .then(period => {
            Recognize.find({ status: true, periodId: period._id, created: {
                $gte:  req.params.startdate,
                $lte: req.params.enddate
              } })
                .populate("userAssignId", "_id name status", User)
                .populate("usercreateId", "_id name status", User)
                .populate("categoryId", Category)
                .populate("subcategoryId", SubCategory)
                .populate("valueId", Values)
                .populate("periodId", "_id name", Period)
                .exec()
                .then(recognitions => {
                    return res.status(200).send({ recognitions })
                })
                .catch(err => {
                    return res.status(500).send({ message: 'In db not exist Recognitions for this user', err })
                })
        })
        .catch(err => {
            return res.status(500).send({ message: 'In db not exist Period actived', err })
        })
}
function searchByCategory(req, res) {
    Period.findOne({ status: true })
        .then(period => {
            Recognize.find({ status: true, periodId: period._id, categoryId: req.params.categoryId })
                .populate("userAssignId", "id name status", User)
                .populate("usercreateId", "_id name status", User)
                .populate("categoryId", Category)
                .populate("subcategoryId", SubCategory)
                .populate("valueId", Values)
                .populate("periodId", "_id name", Period)
                .exec()
                .then(recognitions => {
                    return res.status(200).send({ recognitions })
                })
                .catch(err => {
                    return res.status(500).send({ message: 'In db not exist Recognitions for this user', err })
                })
        })
        .catch(err => {
            return res.status(500).send({ message: 'In db not exist Period actived', err })
        })
}
function searchBySubcategory(req, res) {
    Period.findOne({ status: true })
        .then(period => {
            Recognize.find({ status: true, periodId: period._id, subcategoryId: req.params.subcategoryId })
                .populate("userAssignId", "id name status", User)
                .populate("usercreateId", "_id name status", User)
                .populate("categoryId", Category)
                .populate("subcategoryId", SubCategory)
                .populate("valueId", Values)
                .populate("periodId", "_id name", Period)
                .exec()
                .then(recognitions => {
                    return res.status(200).send({ recognitions })
                })
                .catch(err => {
                    return res.status(500).send({ message: 'In db not exist Recognitions for this user', err })
                })
        })
        .catch(err => {
            return res.status(500).send({ message: 'In db not exist Period actived', err })
        })
}
module.exports = {
    getRecognizesAssignToUserId,
    getRecognizesCreatedToUserId,
    getRecognizesPendingToUserId,
    tableAcomulatedOneUserActualPeriod,
    tableAcomulatedAllUserActualPeriod,
    tableAcomulatedAllUserSelectPeriod,
    tableAcomulatedOneUserSelectPeriod,
    getRecognizesByUser,
    getRecognizesByUserPeriod,
    searchByMonth,
    searchByCategory,
    searchBySubcategory
}