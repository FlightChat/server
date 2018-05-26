let express = require('express');
let router = express.Router();
let models = require('../models');
let bcrypt = require('bcrypt');


router.post('/', function(req, res) {

    let password  = req.body.password;
    console.log(password);
    models.User.find({
        where: {
            email: req.body.email,
        }
    }).then(function(user) {
        bcrypt.compare(password, user.password, function (err, result) {
            console.log(result);
            res.send(result);
        })
    });
});


module.exports = router;
