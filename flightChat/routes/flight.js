var express = require('express');
var router = express.Router();

const key = "aa53379aea660e376fbd8ff66933999b";
const applicationId = "3cf22443";


//help : https://developer.flightstats.com/api-docs/
// airlines API : https://developer.flightstats.com/api-docs/airlines/v1



/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

/* GET home page. */
// DOC : https://developer.flightstats.com/api-docs/airports/v1
router.get('/airport', function(req, res, next) {
    //example :
    // "https://api.flightstats.com/flex/airports/rest/v1/json/active?appId=XXX&appKey=XX"

    res.render('index', { title: 'POST Test' + applicationId });
});
/* GET home page. */
// DOC : https://developer.flightstats.com/api-docs/scheduledFlights/v1
router.get('/schedules', function(req, res, next) {

    //example :

    //"https://api.flightstats.com/flex/schedules/rest/v1/json/from/LIM/to/CDG/departing/2018/5/10?appId=988a22c2&appKey=821beeb54e81057f162e9c1b94a3f6e6"
    res.render('index', { title: 'POST Test' + applicationId });
});
/* GET home page. */
// DOC : https://developer.flightstats.com/api-docs/flightstatus/v2
router.get('/flightstatus', function(req, res, next) {
    //example :
    // curl -v  -X GET "https://api.flightstats.com/flex/flightstatus/rest/v2/json/flight/status/AA/100/arr/2018/4/19?appId=988a22c2&appKey=821beeb54e81057f162e9c1b94a3f6e6&utc=false"

    res.render('index', { title: 'POST Test' + applicationId });
});
/* GET home page. */
// DOC : https://developer.flightstats.com/api-docs/weather/v1
router.get('/weather', function(req, res, next) {
    res.render('index', { title: 'POST Test' + applicationId });
});

module.exports = router;
