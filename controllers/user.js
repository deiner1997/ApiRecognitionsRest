"use strict"
const User = require('../models/user')
const Role = require('../models/role')
const Location = require('../models/location')
const Area = require('../models/area')
const Position = require('../models/position')
const service = require('../services')
const bcrypt = require("bcrypt");
const isEmpty = require('is-empty')
function register(req, res) {
    if (!isEmpty(req.body.Location && req.body.Area && req.body.Position && req.body.email && req.body.name && req.body.username && req.body.Role && req.body.password)) {
        Role.findById(req.body.Role)
            .then(role => {
                if (role != 0) {
                    Area.findById(req.body.Area)
                        .then(area => {
                            if (area.length != 0) {
                                Location.findById(req.body.Location)
                                    .then(location => {
                                        if (location.length != 0) {
                                            Position.findById(req.body.Position)
                                                .then(position => {
                                                    if (position.length != 0) {
                                                        User.findOne().or([{ email: req.body.email }, { username: req.body.username }])
                                                            .then(existing_user => {
                                                                if (existing_user) {
                                                                    return res.status(404).send({ message: 'The email or username already exists' })
                                                                } else {
                                                                    bcrypt.hash(req.body.password, 10, (erro, hash) => {
                                                                        if (erro) {
                                                                            return res.status(500).send({ error: erro, message: "The password is required" });
                                                                        } else {
                                                                            if (req.body.password.length > 6) {
                                                                                const user = new User({
                                                                                    email: req.body.email,
                                                                                    name: req.body.name,
                                                                                    password: hash,
                                                                                    username: req.body.username,
                                                                                    Role: req.body.Role,
                                                                                    Location: req.body.Location,
                                                                                    Area: req.body.Area,
                                                                                    status:true,
                                                                                    Position: req.body.Position,
                                                                                    award: 0
                                                                                });
                                                                                user.save((err) => {
                                                                                    if (err) return res.status(500).send({ message: `Error with be create the user`, error: err })
                                                                                       
                                                                                    return res.status(200).send({ user , message: 'User created successfully' })
                                                                                });
                                                                            } else {
                                                                                return res.status(500).send({ message: `Password should have more than 6 digits` })
                                                                            }

                                                                        }
                                                                    })
                                                                }
                                                            })
                                                            .catch(error => {
                                                                return res.status(500).send({ message: `Error with be create the user ${error}` })
                                                            })

                                                    } else {
                                                        return res.status(404).send({ message: 'The User not exist' })
                                                    }
                                                })
                                                .catch(err => {
                                                    return res.status(500).send({ message: `Error with the Position not exist in Database`, error: err })
                                                })
                                        } else {
                                            return res.status(404).send({ message: 'The Location not exist' })
                                        }
                                    })
                                    .catch(err => {
                                        return res.status(500).send({ message: `Error with the Location  not exist in Database`, error: err })
                                    })
                            } else {
                                return res.status(404).send({ message: 'The Area not exist' })
                            }
                        })
                        .catch(err => {
                            return res.status(500).send({ message: `Error with the Area not exist in Database`, error: err })
                        })
                } else {
                    return res.status(404).send({ message: 'The Role not exist' })
                }
            })
            .catch(err => {
                return res.status(500).send({ message: `Error with the Role not exist in Database`, error: err })
            })
    } else {
        return res.status(500).send({ message: `Information required is empty` })
    }
}
function signIn(req, res) {
    if (!isEmpty(req.body.email) && !isEmpty(req.body.password)) {
        User.findOne().or([{ email: req.body.email }, { username: req.body.email }])
            .then(existing_user => {
                if (existing_user) {
                    if(existing_user.status) {
                    User.find().or([{ email: req.body.email }, { username: req.body.email }])
                        .populate("Area")
                        .populate("Position")
                        .populate("Role")
                        .populate("Location")
                        .exec()
                        .then(user => {
                            if (user) {
                                bcrypt.compare(req.body.password, user[0].password, function (erro, result) {
                                    if (erro) {
                                        return res.status(401).json({
                                            message: "Auth failed"
                                        });
                                    }
                                    if (result) {
                                        res.status(200).send({
                                            message: 'SignIn correctly',
                                            token: service.createToken(user),
                                            user: user
                                        })
                                    } else {
                                        return res.status(401).send({
                                            message: "Password incorrect"
                                        });
                                    }
                                });
                            }
                        })
                        .catch(error => {
                            return res.status(500).send({ message: `Error when making the request: ${error}` })
                        })
                } else {
                    return res.status(500).send({ message: `You do not have permission to login`})
                    
                }
            } else {
                return res.status(500).send({ message: `Email or username not exist`, error: error })
            }
            })
            .catch(error => {
                return res.status(500).send({ message: `Email or Username are incorrect, please try again`, error: error })
            })
    } else {
        return res.status(500).send({ message: `Information required is empty, please try again` })
    }
}
function getUser(req, res) {
    let userid = req.params.userId
    User.findById(userid)
        .populate("Area")
        .populate("Position")
        .populate("Role")
        .populate("Location")
        .exec()
        .then(user => {
            if (!user) return res.status(404).send({ message: 'The User not exist' })
            return res.status(200).send({ user })
        })
        .catch(err => {
            return res.status(500).send({ message: `The User not exist`, error: err })
        })

}
function getUsers(req, res) {
    User.find({status: true}).sort( { name: 1 } )
        .populate("Area")
        .populate("Position")
        .populate("Role")
        .populate("Location")
        .exec()
        .then(user => {
            if (!user) return res.status(404).send({ message: 'Users not found' })
            return res.status(200).send({ user })
        })
        .catch(err => {
            return res.status(500).send({ message: `Users not found`, error: err })
        })
}
function getUsersStatus(req, res) {
    User.find({status: false}).sort( { name: 1 } )
        .populate("Area")
        .populate("Position")
        .populate("Role")
        .populate("Location")
        .exec()
        .then(user => {
            if (!user) return res.status(404).send({ message: 'Users not found' })
            return res.status(200).send({ user })
        })
        .catch(err => {
            return res.status(500).send({ message: `Users not found`, error: err })
        })
}
function updateUser(req, res) {
    let update = req.body;
    let userIdUpdate = req.params.userId;
    User.findByIdAndUpdate(userIdUpdate, { $set: update} )
        .populate("Area")
        .populate("Position")
        .populate("Role")
        .populate("Location")
        .exec()
        .then(userupdated => {
            res.status(200).send({ message: "User Updated", user: userupdated })
        })
        .catch(err => {
            return res.status(500).send({ message: `Error while tried to update the user`, error: err })
        })

}
function updateUserStatus(req, res) {
    let update = req.body;
    let userIdUpdate = req.params.userId;
    User.findByIdAndUpdate(userIdUpdate, { $set: update} )
        .populate("Area")
        .populate("Position")
        .populate("Role")
        .populate("Location")
        .exec()
        .then(userupdated => {
            res.status(200).send({ message: "User Updated", user: userupdated })
        })
        .catch(err => {
            return res.status(500).send({ message: `Error while tried to update the user`, error: err })
        })

}
function deleteUser(req, res) {
    let userIdDelete = req.params.userId;
    User.findById(userIdDelete)
        .then(userdelete => {
            userdelete.remove(err => {
                if (err) return res.status(500).send({ message: `Error while tried to delete the user`, error: err })
                return res.status(200).send({ message: 'User Deleted' })
            })
        })
        .catch(err => {
            res.status(500).send({ message: `User to delete not exist in DataBases`, error: err })
        })
}
module.exports = {
    register,
    signIn,
    getUsers,
    updateUser,
    deleteUser,
    getUser,
    updateUserStatus,
    getUsersStatus
}