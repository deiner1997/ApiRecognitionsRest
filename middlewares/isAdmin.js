const User = require('../models/user')
const Role = require('../models/role')

function userAdmin(req, res, next) {
    let userAdmin = req.headers.userid
        User.findById({ '_id': userAdmin })
        .then(userRole => {
            if (userRole) {
                Role.findById({ '_id': userRole.Role })
                    .then(role => {
                        if (role.name === "Admin") {
                            next()
                        } else {
                            return res.status(404).send({ message: 'You do not have authorization.' })
                        }
                    })
                    .catch(err => {
                        res.status(500).send({ message: 'User role not exist in DB', error: err })
                    })
            }
        })
        .catch(err => {
            res.status(500).send({ message: 'User not exist in DB', error: err })
        })
}
module.exports= userAdmin