const nodemailer = require('nodemailer');
const config = require("../config");
const User = require('../models/user');
const isEmpty = require('is-empty')
function toUserCreateRecognize(userCretedBy, userToAssign, description, status) {
    var smtpTransport = nodemailer.createTransport({
        service: 'Hotmail',
        auth: {
            user: config.emailAdmin,
            pass: config.passwordAdmin
        },
        tls: { rejectUnauthorized: false }
    });
    var mailOptions = {
        to: `${userCretedBy.email}`,
        from: config.emailAdmin,
        subject: 'Recognition Created Avantica',
        html: '<html lang="en">' +
            '<head>' +
            '<title>Recognition</title>' +
            '<style>' +
            'h1 {color:blue; }' +
            'div {text-align: center; background-color: #f5f5f5; border-radius: 6px;}' +
            '</style>' +
            '</head>' +
            '<body>' +
            '<div>' +
            "<h1>Recognition Created.</h1>" +
            "<h3>You are recognizing to: </h3>" +
            `<h2><strong>${userToAssign.name}</strong></h2>` +
            `<h3>By concept to: <h2><strong>${description}</strong></h2></h3>` +
            ` ${status ? "<p style='color:green;'>Actual status: Approved </p>" : "<p style='color:red;'>Actual status: Pending </p>"}` +
            '</div>' +
            '</body>' +
            '</html>'
    };
    smtpTransport.sendMail(mailOptions, function (err) {
        if (err) return false;
        console.log('mail sent');
        return true;
    });
}
function toUserRecognize(userCretedBy, userToAssign, description, status) {

    var smtpTransport = nodemailer.createTransport({
        service: 'Hotmail',
        auth: {
            user: config.emailAdmin,
            pass: config.passwordAdmin
        },
        tls: { rejectUnauthorized: false }
    });
    var mailOptions = {
        to: `${userToAssign.email}`,
        from: config.emailAdmin,
        subject: 'Recognition Created Avantica',
        html: '<html lang="en">' +
            '<head>' +
            '<title>Recognition</title>' +
            '<style>' +
            'h1 {color:blue; }' +
            'p {color:orange;}' +
            'div {text-align: center; background-color: #f5f5f5; border-radius: 6px;}' +
            '</style>' +
            '</head>' +
            '<body>' +
            '<div>' +
            "<h1>Recognition Created.</h1>" +
            "<h3>You are receiving recognition from: </h3>" +
            `<h2><strong>${userCretedBy.name}</strong></h2>` +
            `<h3>By concept to: <h2><strong>${description}</strong></h2></h3>` +
            ` ${status ? "<p style='color:green;'>Actual status: Approved </p>" : "<p style='color:red;'>Actual status: Pending </p>"}` +
            '</div>' +
            '</body>' +
            '</html>'
    };
    smtpTransport.sendMail(mailOptions, function (err) {
        if (err) return false;
        console.log('mail sent');
        return true;
    });
}
function toUserAdminCreate(admin,userCretedName, userToAssignName, description, status) {
    var smtpTransport = nodemailer.createTransport({
        service: 'Hotmail',
        auth: {
            user: config.emailAdmin,
            pass: config.passwordAdmin
        },
        tls: { rejectUnauthorized: false }
    });
    var mailOptions = {
        to: `${admin}`,
        from: config.emailAdmin,
        subject: 'Recognition Created Avantica',
        html: '<html lang="en">' +
            '<head>' +
            '<title>Recognition</title>' +
            '<style>' +
            'h1 {color:blue; }' +
            'div {text-align: center; background-color: #f5f5f5; border-radius: 6px;}' +
            '</style>' +
            '</head>' +
            '<body>' +
            '<div>' +
            "<h1>Recognition Created.</h1>" +
            `<h3>${userCretedName} is recognizing to: </h3>` +
            `<h2><strong>${userToAssignName}</strong></h2>` +
            `<h3>By concept to: <h2><strong>${description}</strong></h2></h3>` +
            ` ${status ? "<p style='color:green;'>Actual status: Approved </p>" : "<p style='color:red;'>Actual status: Pending </p>"}` +
            '</div>' +
            '</body>' +
            '</html>'
    };
    smtpTransport.sendMail(mailOptions, function (err) {
        if (err) return false;
        console.log('mail sent');
        return true;
    });
}
function toUserAdminUpdate(admin,userCretedName, userToAssignName, description, status) {
    var smtpTransport = nodemailer.createTransport({
        service: 'Hotmail',
        auth: {
            user: config.emailAdmin,
            pass: config.passwordAdmin
        },
        tls: { rejectUnauthorized: false }
    });
    var mailOptions = {
        to: `${admin}`,
        from: config.emailAdmin,
        subject: 'Recognition Updated Avantica',
        html: '<html lang="en">' +
            '<head>' +
            '<title>Recognition</title>' +
            '<style>' +
            'h1 {color:blue; }' +
            'div {text-align: center; background-color: #f5f5f5; border-radius: 6px;}' +
            '</style>' +
            '</head>' +
            '<body>' +
            '<div>' +
            "<h1>Recognition Updated.</h1>" +
            `<h3>Recognition created by: ${userCretedName} recognizing to: </h3>` +
            `<h2><strong>${userToAssignName}</strong></h2>` +
            `<h3>By concept of: <h2><strong>${description}</strong></h2></h3>` +
            "<h3>was updated</h3>" +
            ` ${status ? "<p style='color:green;'>Actual status: Approved </p>" : "<p style='color:red;'>Actual status: Pending </p>"}` +
            '</div>' +
            '</body>' +
            '</html>'
    };
    smtpTransport.sendMail(mailOptions, function (err) {
        if (err) return false;
        console.log('mail sent');
        return true;
    });
}
module.exports = {
    toUserCreateRecognize,
    toUserRecognize,
    toUserAdminCreate,
    toUserAdminUpdate
}