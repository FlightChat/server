let express = require('express');
let router = express.Router();
let http = require('http').Server(express);
let db = require('../models');
let bcrypt = require('bcrypt');
let salt = 42;

function getUser(id=null) {
    if (id != null) {
        db.User.findById(id).then(function (result) {
            return json.result;
        });

    }
    else {
        db.user.findAll({}).then( function (result) {
            return result
        });
    }
}

function addUser(params) {
    var savedUser = null;
    var newUser = db.User.build({
        name : params.name,
        username : params.username,
        password :bcrypt.hashSync(params.password,10),
        email : params.email
    });
    newUser.save().then((user) => {
        res.json(user);
    });


}

module.exports = {getUser, addUser};