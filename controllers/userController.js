let express = require('express');
let router = express.Router();
let http = require('http').Server(express);
let db = require('../models');
let bcrypt = require('bcrypt');
var salt = 42;

function getUser(id=null) {
    if (id != null) {
        db.User.findById(id).then(function (result) {
            return result;
        });

    }
    else {
        db.user.findAll({}).then( function (result) {
            return result
        });
    }
}

function addUser(params) {
    console.log(params);
    var build = db.User.build({
        name : params.name,
        username : params.username,
        password :getHash(params.password),
        email : params.email
    });

    var userJson = build.save();
    return  build;
}

function getHash (pass){
    var salty = bcrypt.genSaltSync();
    console.log('pass is ' + pass);
    var hashPassword  = bcrypt.hashSync(pass, salty);
    console.log(hashPassword);
    return hashPassword;
}
module.exports = {getUser, addUser};