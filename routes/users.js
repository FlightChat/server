let express = require('express');
let router = express.Router();
let userController = require('../controllers/userController');

// var controller = ;

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
/* GET users listing. */
router.get('/:id', function(req, res, next) {

   res.send(userController.getUser(req.params.id));
});


router.post('/', function(req, res, next)
{
    return res.send(userController.addUser(req.body));
});


router.delete('/', function(req, res, next)
{

});



module.exports = router;
