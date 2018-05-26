let express = require('express');
let router = express.Router();
let userController = require('../controllers/userController');
let models = require('../models');

// var controller = ;

/* GET users listing. */
router.get('/', function(req, res) {
    models.User.findAll({}).then(function(users) {
        res.json(users);
    });
});
/* GET users listing. */
router.get('/:id', function(req, res) {
    models.User.find({
        where: {
            id: req.params.id + 1
        }
    }).then(function(user) {
        res.json(user);
    });
});


router.post('/', function(req, res, next)
{
    console.log(req.body);
    router.post('/users', function(req, res) {
        models.User.create({
            name : req.body.name,
            password :bcrypt.hashSync(req.body.password,10),
            email : req.body.email
        }).then(function(user) {
            res.json(user);
        });
    });
});


// delete a single todo
router.delete('/:id', function(req, res) {
    models.User.destroy({
        where: {
            id: req.params.id + 1
        }
    }).then(function(user) {
        res.json(user);
    });
});


module.exports = router;
