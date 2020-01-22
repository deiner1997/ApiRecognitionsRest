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
const sendEmail = require('./sendEmail')

function createRecognize(req, res) {
    if (!isEmpty(req.headers.userid && req.body.userAssignId && req.body.description && req.body.periodId)) {
        if (!isEmpty(req.body.categoryId || req.body.subcategoryId)) {
            if (req.headers.userid != req.body.userAssignId) {
                let user = req.headers.userid;
                Period.findById({ '_id': req.body.periodId })
                    .then(period => {
                        if (period.length != 0) {
                            User.findById({ '_id': user })
                                .then(userChanged => {
                                    User.findById({ '_id': req.body.userAssignId })
                                        .then(usertoassign => {
                                            Period.findById({ '_id': req.body.periodId })
                                                .then(periodCharge => {
                                                    if (periodCharge.status) {
                                                        if (userChanged.Role == "5ce9b43f7a794235b4265f16") {
                                                            if (!isEmpty(req.body.subcategoryId)) {
                                                                if (req.body.subcategoryId != "5cfaeed4d8067e1f88148763") {
                                                                    SubCategory.findById({ '_id': req.body.subcategoryId })
                                                                        .then(subcategory => {
                                                                            if (subcategory.length != 0) {
                                                                                saveRecognition(req, res, usertoassign, userChanged);
                                                                            }
                                                                        })
                                                                        .catch(err => {
                                                                            return req.res.status(500).send({ message: "SubCategory not exist in DB", error: err })
                                                                        })
                                                                } else {
                                                                    if (!isEmpty(req.body.sherpasNum || req.body.sherpascommittee)) {
                                                                        SubCategory.findById({ '_id': req.body.subcategoryId })
                                                                            .then(subcategory => {
                                                                                if (subcategory.length != 0) {
                                                                                    saveRecognition(req, res, usertoassign, userChanged);
                                                                                }
                                                                            })
                                                                            .catch(err => {
                                                                                return res.status(500).send({ message: "SubCategory not exist in DB", error: err })
                                                                            })
                                                                    } else {
                                                                        return res.status(500).send({ message: "For create SubCategory sherpas is necessary number of sherpas or if is sherpas committe" })
                                                                    }
                                                                }

                                                            } else {
                                                                Category.findById({ '_id': req.body.categoryId })
                                                                    .then(category => {
                                                                        if (category.length != 0) {
                                                                            if (category._id != "5cfaeb20d8067e1f88148756") {
                                                                                if (!isEmpty(req.body.valueId)) {
                                                                                    Values.findById({ '_id': req.body.valueId })
                                                                                        .then(value => {
                                                                                            if (value.length != 0) {
                                                                                                saveRecognition(req, res, usertoassign, userChanged);
                                                                                            }
                                                                                        })
                                                                                        .catch(err => {
                                                                                            return req.res.status(500).send({ message: "Value not exist in DB", error: err })
                                                                                        })
                                                                                } else {
                                                                                    return req.res.status(500).send({ message: "For create category Outstanding Values the Value is required" })
                                                                                }
                                                                            } else {
                                                                                saveRecognition(req, res, usertoassign, userChanged);
                                                                            }
                                                                        }
                                                                    })
                                                                    .catch(err => {
                                                                        return req.res.status(500).send({ message: "Category not exist in DB", error: err })
                                                                    })
                                                            }
                                                        } else if (userChanged.Role != "5ce9b43f7a794235b4265f16" && userChanged.Position == "5cf97919c74dea157019332b") {
                                                         
                                                            if (!isEmpty(req.body.categoryId)) {
                                                                Category.findById({ '_id': req.body.categoryId })
                                                                    .then(category => {
                                                                        if (category.length != 0) {
                                                                            if (category._id != "5cfaeb20d8067e1f88148756") {
                                                                                if (!isEmpty(req.body.valueId)) {
                                                                                    Values.findById({ '_id': req.body.valueId })
                                                                                        .then(value => {
                                                                                            if (value.length != 0) {
                                                                                                saveRecognition(req, res, usertoassign, userChanged);
                                                                                            }
                                                                                        })
                                                                                        .catch(err => {
                                                                                            return req.res.status(500).send({ message: "Value not exist in DB", error: err })
                                                                                        })
                                                                                } else {
                                                                                    return req.res.status(500).send({ message: "For create category Outstanding Values the Value is required" })
                                                                                }
                                                                            } else {
                                                                                saveRecognition(req, res, usertoassign, userChanged);
                                                                            }
                                                                        }
                                                                    })
                                                                    .catch(err => {
                                                                        return req.res.status(500).send({ message: "Category not exist in DB", error: err })
                                                                    })
                                                            } else {
                                                                if (!isEmpty(req.body.subcategoryId)) {
                                                                    if (req.body.subcategoryId != "5cfaeed4d8067e1f88148763") {
                                                                        SubCategory.findById({ '_id': req.body.subcategoryId })
                                                                            .then(subcategory => {
                                                                                if (subcategory.length != 0) {
                                                                                    saveRecognition(req, res, usertoassign, userChanged);
                                                                                }
                                                                            })
                                                                            .catch(err => {
                                                                                return req.res.status(500).send({ message: "SubCategory not exist in DB", error: err })
                                                                            })
                                                                    } else {
                                                                        if (!isEmpty(req.body.sherpasNum || req.body.sherpascommittee)) {
                                                                            SubCategory.findById({ '_id': req.body.subcategoryId })
                                                                                .then(subcategory => {
                                                                                    if (subcategory.length != 0) {
                                                                                        saveRecognition(req, res, usertoassign, userChanged);
                                                                                    }
                                                                                })
                                                                                .catch(err => {
                                                                                    return res.status(500).send({ message: "SubCategory not exist in DB", error: err })
                                                                                })
                                                                        } else {
                                                                            return res.status(500).send({ message: "For create SubCategory sherpas is necessary number of sherpas or if is sherpas committe" })
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        } else {
                                                            if (isEmpty(req.body.subcategoryId)) {
                                                                Category.findById({ '_id': req.body.categoryId })
                                                                    .then(category => {
                                                                        if (category.length != 0) {
                                                                            if (category._id != "5cfaeb20d8067e1f88148756") {
                                                                                //Categoríaes diferente de agradecidos
                                                                                return res.status(404).send({ message: 'You do not have authorization for create this category.' })
                                                                            } else {
                                                                                saveRecognition(req, res, usertoassign, userChanged);
                                                                            }
                                                                        }
                                                                    })
                                                                    .catch(err => {
                                                                        return res.status(500).send({ message: 'Category not exist in DB.', error: err })
                                                                    })

                                                            } else {
                                                                return res.status(500).send({ message: "You can't have authorization for create subcategories" })
                                                            }
                                                        }
                                                    } else {
                                                        return res.status(500).send({ message: "Period is closed or disable" })
                                                    }
                                                })
                                                .catch(err => {
                                                    return req.res.status(500).send({ message: "Period not exist in DB", error: err })
                                                })
                                        })
                                        .catch(err => {
                                            return req.res.status(500).send({ message: "User to assign recognize not exist in DB", error: err })
                                        })
                                })
                                .catch(err => {
                                    res.status(500).send({ message: 'User not exist in DB', error: err })
                                })
                        } else {
                            return res.status(500).send({ message: "We can't find this period exist in DB" })
                        }
                    })
                    .catch(err => {
                        return res.status(500).send({ message: 'Period not exist in DB', error: err })
                    })
            } else {
                return res.status(500).send({ message: "You can't recognize yourself" })
            }
        } else {
            return res.status(500).send({ message: "Category or subcategory are required and is empty" })
        }
    } else {
        return res.status(500).send({ message: "Information required is empty" })
    }

}
function saveRecognition(req, res, usertoassign, userChanged) {
    const recognize = new Recognize({
        description: req.body.description,
        usercreateId: req.headers.userid,
        userAssignId: req.body.userAssignId,
        categoryId: !isEmpty(req.body.categoryId) ? req.body.categoryId : null,
        subcategoryId: !isEmpty(req.body.subcategoryId) ? req.body.subcategoryId : null,
        status: false,
        periodId: req.body.periodId,
        client: req.body.client,
        sherpasNum: req.body.sherpasNum,
        sherpascommittee: req.body.sherpascommittee,
        valueId: !isEmpty(req.body.valueId) ? req.body.valueId : null
    });
    recognize.save((err) => {
        if (err) return res.status(500).send({ message: `Error trying to save Recognize`, error: err })
        //sendEmailAdmin(userChanged.name, usertoassign.name, req.body.description, recognize.status,"Create");
        return res.status(200).send({ message: 'Recognition created successfully', recognize: recognize })
    });
}
function updateRecognize(req, res) {
    let pointsAdded = 0;
    let recognizeIdUpdate = req.params.recognizeId;
    if (!isEmpty(req.params.recognizeId && req.body.status)) {
        Recognize.findById({ '_id': recognizeIdUpdate })
            .then(recognize => {
                if (!recognize.status) {
                    if (recognize.categoryId == "5cfaeb20d8067e1f88148756") {//Grateful
                        categoryNumber1(req, res, recognize, pointsAdded)
                    } else if (recognize.categoryId == "5cfaeb85d8067e1f88148758") {//Outstanding Values
                        categoryNumber2(req, res, recognize, pointsAdded);

                    } else if (recognize.subcategoryId == "5cfaee0dd8067e1f88148760") {//Training given
                        pointsAdded = 10;
                        updateSpecificRecognize(req, res, recognize, pointsAdded);
                        updateUserTablePoints(req, res, recognize.userAssignId, recognize.periodId, pointsAdded);
                    } else if (recognize.subcategoryId == "5cfaee36d8067e1f88148761") { //Article posted
                        pointsAdded = 10;
                        updateSpecificRecognize(req, res, recognize, pointsAdded);
                        updateUserTablePoints(req, res, recognize.userAssignId, recognize.periodId, pointsAdded);
                    } else if (recognize.subcategoryId == "5cfaee56d8067e1f88148762") { //Interviewer
                        pointsAdded = 0;
                        interviewerPoints(req, res, recognize, pointsAdded);
                    } else if (recognize.subcategoryId == "5cfaeed4d8067e1f88148763") { //Sherpas
                        if (recognize.sherpasNum === 1) {
                            pointsAdded = 5;
                        } else if (recognize.sherpasNum === 2) {
                            pointsAdded = 10;
                        } else if (recognize.sherpasNum === 3) {
                            pointsAdded = 15;
                        } else if (recognize.sherpascommittee) {
                            pointsAdded = 15;
                        }
                        updateSpecificRecognize(req, res, recognize, pointsAdded);
                        updateUserTablePoints(req, res, recognize.userAssignId, recognize.periodId, pointsAdded);
                    } else if (recognize.subcategoryId == "5cfaeee9d8067e1f88148764") { //Different initiatives and internal programs
                        pointsAdded = 10;
                        updateSpecificRecognize(req, res, recognize, pointsAdded);
                        updateUserTablePoints(req, res, recognize.userAssignId, recognize.periodId, pointsAdded);
                    } else if (recognize.subcategoryId == "5cfaeefdd8067e1f88148765") { //Participation in a committee
                        pointsAdded = 10;
                        updateSpecificRecognize(req, res, recognize, pointsAdded);
                        updateUserTablePoints(req, res, recognize.userAssignId, recognize.periodId, pointsAdded);
                    } else if (recognize.subcategoryId == "5cfaef68d8067e1f88148766") { //Active participation in a GPI
                        pointsAdded = 10;
                        updateSpecificRecognize(req, res, recognize, pointsAdded);
                        updateUserTablePoints(req, res, recognize.userAssignId, recognize.periodId, pointsAdded);
                    } else if (recognize.subcategoryId == "5cfaef92d8067e1f88148767") { //Programming or QA tasks completed
                        pointsAdded = 10;
                        updateSpecificRecognize(req, res, recognize, pointsAdded);
                        updateUserTablePoints(req, res, recognize.userAssignId, recognize.periodId, pointsAdded);
                    } else if (recognize.subcategoryId == "5cfaefa4d8067e1f88148768") { //Innovation Coach
                        pointsAdded = 15;
                        updateSpecificRecognize(req, res, recognize, pointsAdded);
                        updateUserTablePoints(req, res, recognize.userAssignId, recognize.periodId, pointsAdded);
                    } else if (recognize.subcategoryId == "5cfaefbfd8067e1f88148769") { //Outstanding semester
                        pointsAdded = 15;
                        updateSpecificRecognize(req, res, recognize, pointsAdded);
                        updateUserTablePoints(req, res, recognize.userAssignId, recognize.periodId, pointsAdded);
                    } else if (recognize.subcategoryId == "5cfaefe6d8067e1f8814876a") { //Outstanding participation in a Presales team
                        pointsAdded = 20;
                        updateSpecificRecognize(req, res, recognize, pointsAdded);
                        updateUserTablePoints(req, res, recognize.userAssignId, recognize.periodId, pointsAdded);
                    } else if (recognize.subcategoryId == "5cfaf015d8067e1f8814876b") { //"Upsell" opportunities
                        pointsAdded = 30;
                        updateSpecificRecognize(req, res, recognize, pointsAdded);
                        updateUserTablePoints(req, res, recognize.userAssignId, recognize.periodId, pointsAdded);
                    } else if (recognize.subcategoryId == "5cfaf0b2d8067e1f8814876c") { //Attract a new client, increased the amount of resources in a project, achieved the continuity of a client
                        pointsAdded = 40;
                        updateSpecificRecognize(req, res, recognize, pointsAdded);
                        updateUserTablePoints(req, res, recognize.userAssignId, recognize.periodId, pointsAdded);
                    } else if (recognize.subcategoryId == "5cfaf0fed8067e1f8814876d") { //Exceptional contribution
                        pointsAdded = 50;
                        updateSpecificRecognize(req, res, recognize, pointsAdded);
                        updateUserTablePoints(req, res, recognize.userAssignId, recognize.periodId, pointsAdded);
                    } else if (recognize.subcategoryId == "5cfaf25dd8067e1f8814876e") { //Excellent in the Customer Service Survey
                        pointsAdded = 20;
                        updateSpecificRecognize(req, res, recognize, pointsAdded);
                        updateUserTablePoints(req, res, recognize.userAssignId, recognize.periodId, pointsAdded);
                    }
                } else {
                    return res.status(500).send({ message: `Recognition was already updated` })
                }
            })
            .catch(err => {
                return res.status(500).send({ message: `Recognize not exist in Data Base`, error: err })
            })
    } else {
        return res.status(500).send({ message: `Information required is empty` })
    }
}
function categoryNumber1(req, res, recognize, pointsAdded) {
    //Validar max 5 puntos por periodo
    Recognize.find().or([{ usercreateId: recognize.usercreateId }, { userAssignId: recognize.usercreateId }]).and([{ periodId: recognize.periodId }, { categoryId: recognize.categoryId }, { points: 1 }])
        .then(recognizeCreated => {
            Recognize.find().or([{ usercreateId: recognize.userAssignId }, { userAssignId: recognize.userAssignId }]).and([{ periodId: recognize.periodId }, { categoryId: recognize.categoryId }, { points: 1 }])
                .then(recognizeReceived => {
                    if (recognizeCreated.length < 5 && recognizeReceived.length < 5) {
                        pointsAdded = 1;
                        updateSpecificRecognize(req, res, recognize, pointsAdded)
                        updateUserTablePoints(req, res, recognize.usercreateId, recognize.periodId, pointsAdded);
                        updateUserTablePoints(req, res, recognize.userAssignId, recognize.periodId, pointsAdded);
                    } else {
                        if (recognizeCreated.length < 5) {
                            pointsAdded = 1;
                            updateSpecificRecognize(req, res, recognize, pointsAdded)
                            updateUserTablePoints(req, res, recognize.usercreateId, recognize.periodId, pointsAdded);
                        } else {
                            if (recognizeReceived.length < 5) {
                                pointsAdded = 1;
                                updateSpecificRecognize(req, res, recognize, pointsAdded)
                                updateUserTablePoints(req, res, recognize.userAssignId, recognize.periodId, pointsAdded);
                            } else {
                                pointsAdded = 0;
                                updateSpecificRecognize(req, res, recognize, pointsAdded)
                            }
                        }
                    }
                })
                .catch(err => {
                    return res.status(500).send({ message: `Recognize not exist in Data Base Category`, error: err })
                })
        })
        .catch(err => {
            return res.status(500).send({ message: `Recognize not exist in Data Base`, error: err })
        })
}
//Actualiza los reconocimientos categoría #2
function categoryNumber2(req, res, recognize, pointsAdded) {
    //Validar enviados por una misma persona, misma acción, en un lapso de 2 meses
    Recognize.find({ $and: [{ usercreateId: recognize.usercreateId }, { periodId: recognize.periodId }, { categoryId: recognize.categoryId }, { points: { $gt: 4, $lt: 11 } }] })
        .then(recognizeCreated => {
            if (recognizeCreated.length != 0) {
                var constante = false;
                for (var i = 0; i < recognizeCreated.length; i++) {
                    if (!recognizeCreated[i]._id.equals(recognize._id)) {
                        if (recognizeCreated[i].valueId.equals(recognize.valueId) && recognizeCreated[i].userAssignId.equals(recognize.userAssignId)) {
                            if (diff_months(recognize.created, recognizeCreated[i].created) < 2) {
                                constante = true;
                                pointsAdded = 0;
                                updateSpecificRecognize(req, res, recognize, pointsAdded);
                                break;
                            } else {
                                constante = false;
                            }

                        }
                    }
                }
                if (!constante) {
                    if (recognize.client) {
                        pointsAdded = 10;
                    } else {
                        pointsAdded = 5;
                    }
                    updateSpecificRecognize(req, res, recognize, pointsAdded);
                    updateUserTablePoints(req, res, recognize.userAssignId, recognize.periodId, pointsAdded);
                    updateAwardUser(req, res, recognize, 1)
                }
            } else {
                if (recognize.client) {
                    pointsAdded = 10;
                } else {
                    pointsAdded = 5;
                }
                updateSpecificRecognize(req, res, recognize, pointsAdded);
                updateUserTablePoints(req, res, recognize.userAssignId, recognize.periodId, pointsAdded);
                updateAwardUser(req, res, recognize, 1)
            }
        })
        .catch(err => {

        })
}
function diff_months(dt2, dt1) {

    var diff = (dt2.getTime() - dt1.getTime()) / 1000;
    diff /= (60 * 60 * 24 * 7 * 4);
    return Math.abs(Math.round(diff));

}
//Actualiza un reconocimiento
function updateSpecificRecognize(req, res, recognize, pointsAdded) {
    Recognize.findByIdAndUpdate(recognize._id, {
        $set: {
            points: pointsAdded,
            status: req.body.status
        }
    })
        .populate("userAssignId")
        .populate("usercreateId")
        .then(recognizeupdated => {
            //sendEmail.toUserCreateRecognize(recognizeupdated.usercreateId,recognizeupdated.userAssignId,recognize.description,req.body.status);
            //sendEmail.toUserRecognize(recognizeupdated.usercreateId,recognizeupdated.userAssignId,recognize.description,req.body.status);
            //sendEmailAdmin(recognizeupdated.usercreateId.name, recognizeupdated.userAssignId.name, recognize.description, req.body.status,"Update");
            return res.status(200).send({ message: "Recognize Updated", recognize: recognizeupdated })
        })
        .catch(err => {

            return res.status(500).send({ message: `Error while tried to update the recognize ${err}` })
        })
}
//Añade puntos a tabla acomulada
function updateUserTablePoints(req, res, userId, periodId, userToSum) {
    PointsTable.findOne({ userId: userId, periodId: periodId })
        .then(pointstable => {
            if (pointstable) {
                pointstable.pointsTotal = pointstable.pointsTotal + userToSum;
                pointstable.save(function (err) {
                    if (err) return res.status(500).send({ message: "We can´t save points", error: err })
                });
            } else {
                User.findById(userId)
                    .then(user => {
                        if (user) {
                            const points = new PointsTable({
                                userId: userId,
                                pointsTotal: userToSum,
                                periodId: periodId,
                                areaId: user.Area
                            });
                            points.save((err) => {
                                if (err) return res.status(500).send({ message: `Error with be create the user Table points`, error: err })
                            });
                        } else {
                            return res.status(500).send({ message: `User not exist` });
                        }
                    })
                    .catch(err => {
                        return res.status(500).send({ message: `Error searching the user`, error: err })
                    })
            }
        })
        .catch(err => {
            return res.status(500).send({ message: `Error with be create the User points`, error: err })
        });
}
function interviewerPoints(req, res, recognize, pointsAdded) {
    Recognize.find({ userAssignId: recognize.userAssignId }).and([{ periodId: recognize.periodId }, { subcategoryId: recognize.subcategoryId }, { points: 1 }])
        .then(recognizeReceived => {
            if (recognizeReceived.length < 5) {
                pointsAdded = 1;
                updateUserTablePoints(req, res, recognize.userAssignId, recognize.periodId, pointsAdded);
                updateSpecificRecognize(req, res, recognize, pointsAdded)
            } else {
                pointsAdded = 0;
                updateSpecificRecognize(req, res, recognize, pointsAdded)
            }
        })
        .catch(err => {
            return res.status(500).send({ message: "We had troubles updating interviewer recognize ", error: err })
        })
}
function getRecognize(req, res) {
    let recognizeid = req.params.recognizeId
    Recognize.findById(recognizeid)
        .populate("userAssignId")
        .populate("usercreateId")
        .populate("categoryId", Category)
        .populate("subcategoryId", SubCategory)
        .populate("valueId", Values)
        .populate("periodId", "_id name", Period)
        .exec()
        .then(recognize => {
            return res.status(200).send({ recognize })
        })
        .catch(err => {
            return res.status(500).send({ message: 'The Recognize not exist', error: err })
        })
}
function getRecognizesByPeriod(req, res) {
    Recognize.find({ periodId: req.headers.periodid })
        .populate("userAssignId")
        .populate("usercreateId")
        .populate("categoryId")
        .populate("subcategoryId")
        .populate("valueId")
        .populate("periodId")
        .exec()
        .then(recognitions => {
            return res.status(200).send({ recognitions })
        })
        .catch(err => {
            return res.status(500).send({ message: 'In db not exist Recognitions' })
        })
}
function getRecognizesByPeriodPending(req, res) {
    Period.findOne({ status: true })
        .then(period => {
            Recognize.find({ periodId: period._id, status: false })
                .populate("userAssignId", "id name username", User)
                .populate("usercreateId", "_id name username", User)
                .populate("categoryId", Category)
                .populate("subcategoryId", SubCategory)
                .populate("valueId", Values)
                .populate("periodId", "_id name", Period)
                .exec()
                .then(recognitions => {
                    return res.status(200).send({ recognitions })
                })
                .catch(err => {
                    return res.status(500).send({ message: 'In db not exist Recognitions in status pending' })
                })
        })
        .catch(err => {
            return res.status(500).send({ message: 'In db not exist Period actived', err })
        })
}
function deleteRecognize(req, res) {
    let recognitionIdDelete = req.params.recognizeId;
    Recognize.findById(recognitionIdDelete)
        .then(recognitiondelete => {
            recognitiondelete.remove(err => {
                if (err) return res.status(500).send({ message: `Error while tried to delete the recognition ${err}` })
                return res.status(200).send({ message: 'Recognition Deleted', recognitiondelete })
            })
        })
        .catch(err => {
            res.status(500).send({ message: `Recognize to delete not exist in DataBases`, error: err })
        })
}
function updateAwardUser(req, res, recognize, awardnum) {
    User.findById({ "_id": recognize.userAssignId })
        .then(userSumAward => {
            if (userSumAward) {
                userSumAward.award = userSumAward.award + awardnum;
                userSumAward.save(function (err) {
                    if (err) return res.status(500).send({ message: "We can´t update awards", error: err })
                });
            }
        })
        .catch(err => {
            return res.status(500).send({ message: "We can add award to user", error: err })
        });
}
function sendEmailAdmin(userCretedName, userToAssignName, description, status, action) {
    User.find({ Role: "5ce9b43f7a794235b4265f16", status: true })
        .then(user => {
            if (!isEmpty(user)) {
                for (var i = 0; i < user.length; i++) {
                    if (action === "Create") {
                        sendEmail.toUserAdminCreate(user[i].email, userCretedName, userToAssignName, description, status)
                    } else if (action === "Update") {
                        sendEmail.toUserAdminUpdate(user[i].email, userCretedName, userToAssignName, description, status)
                    }
                }
            } else {
                return res.status(500).send({ message: "In db not exist users with role admin" })
            }
        })
        .catch(err => {
            return res.status(500).send({ message: "In db not exist users with role admin", error: err })
        })
}
function updateRecognizeInfo(req, res) {
    req.body.valueId = !isEmpty(req.body.valueId) ? req.body.valueId : null
    req.body.categoryId = !isEmpty(req.body.categoryId) ? req.body.categoryId : null
    req.body.subcategoryId = !isEmpty(req.body.subcategoryId) ? req.body.subcategoryId : null
    let update = req.body;
    let recognizeId = req.params.recognizeId;
    Recognize.findByIdAndUpdate(recognizeId, { $set: update})
        .then(recognizeupdated => {
            return res.status(200).send({ message: "Recognize Updated", recognize: recognizeupdated })
        })
        .catch(err => {
            return res.status(500).send({ message: `Error while tried to update the recognize ${err}` })
        })
}
module.exports = {
    createRecognize,
    updateRecognize,
    getRecognize,
    getRecognizesByPeriod,
    deleteRecognize,
    getRecognizesByPeriodPending,
    updateRecognizeInfo
}