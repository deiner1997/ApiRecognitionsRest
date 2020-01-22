"use strict"
const Role = require('../models/role')



/*function saveRole(req, res) {
    let role = new Role()
    role.name = req.body.name
    role.save((err, roleStore) => {
        if (err) res.status(500).send({ message: 'Error while send data' })
        res.status(200).send({ message: "Role saved", role: roleStore })
    })
}*/
function getRole(req, res) {
    let roleid = req.params.roleId
    Role.findById(roleid)
        .then(role => {
            if (!role) return res.status(404).send({ message: 'The Role not exist' })
            return res.status(200).send({ role })
        })
        .catch(err => {
            return res.status(500).send({ message: `Error when making the request`, error: err })
        })

}
function getRoles(req, res) {
    Role.find({})
    .then(roles => {
        if (!roles) return res.status(404).send({ message: 'In db not exist roles' })
        return res.status(200).send({ roles })
    })
    .catch(err => {
        return res.status(500).send({ message: `Error when making the request`, error: err })
    })
}
/*function deleteRole(req, res) {
    let roleIdDelete = req.params.roleId;
    Role.findById(roleIdDelete)
        .then(roledelete => {
            roledelete.remove(err => {
                if (err) return res.status(500).send({ message: `Error while tried to delete the Role ${err}` })
                return res.status(200).send({ message: 'Role Deleted', roledelete})
            })
        })
        .catch(err => {
            res.status(500).send({ message: `Role to delete not exist in DataBases`, error: err })
        })
}*/
/*function updateRole(req, res) {
    let update = req.body;
    let roleIdUpdate = req.params.roleId;
    Role.findByIdAndUpdate(roleIdUpdate, { $set: update })
        .then(roleupdated => {
            return res.status(200).send({ message: "Role Updated", role: roleupdated })
        })
        .catch(err => {
            return res.status(500).send({ message: `Error while tried to update the role`, error: err })
        })
}*/
module.exports = {
    // saveRole,
    getRole,
   // deleteRole,
   // updateRole,
    getRoles
}