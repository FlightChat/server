let express = require('express');
let router = express.Router();
let http = require('http').Server(express);
let db = require('../models');
let bcrypt = require('bcrypt');
let salt = 42;

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
    // db.User.create({
    //     name : params.name,
    //     username : params.username,
    //     password :getHash(params.password),
    //     email : params.email
    // });
    getHash(params.password);
}

function getHash (pass){
    let hashPassword = null;
    console.log('pass is ' + pass);
    bcrypt.hash(pass, salt, function(err, hash) {
        hashPassword =  hash;
    });
    console.log(hashPassword);
    return hashPassword;
}
module.exports = {getUser, addUser};