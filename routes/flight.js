var express = require('express');
var router = express.Router();
var request = require('request');

const key = "4cee1615d7be357ab24a5989cc5ed52b";
const applicationId = "53b0a504";


//help : https://developer.flightstats.com/api-docs/
// airlines API : https://developer.flightstats.com/api-docs/airlines/v1



/* GET home page. */
router.get('/', function(req, res, next) {
    request({
        uri: 'https://api.flightstats.com/flex/airports/rest/v1/json/active',
        qs: {
            appId: applicationId,
            appKey: key
        }
    }).pipe(res);
});

/* GET home page. */
// DOC : https://developer.flightstats.com/api-docs/airports/v1
router.get('/airport', function(req, res, next) {
    request({
        uri: 'https://api.flightstats.com/flex/airports/rest/v1/json/active',
        qs: {
            appId: applicationId,
            appKey: key
        }
    }).pipe(res);
});
/* GET home page. */
// DOC : https://developer.flightstats.com/api-docs/scheduledFlights/v1
// URL :     //"https://api.flightstats.com/flex/schedules/rest/v1/json/from/LIM/to/CDG/departing/2018/5/10?appId=988a22c2&appKey=821beeb54e81057f162e9c1b94a3f6e6"
router.get('/schedule', function(req, res, next) {
    console.log('inHere');
    console.log(req);
    var fromAirport  =  req.query.fromAirport;
    var toAirport  =  req.query.toAirport;
    var date  =  req.query.date;
    console.log('https://api.flightstats.com/flex/schedules/rest/v1/json/from/' + fromAirport +  '/to/' + toAirport + /departing/ + date);
    request({
        uri: 'https://api.flightstats.com/flex/schedules/rest/v1/json/from/' + fromAirport + '/to/' + toAirport + '/departing/' + date,
        qs: {
            appId: applicationId,
            appKey: key
        }
    }).pipe(res);
});

/* GET home page. */
// DOC : https://developer.flightstats.com/api-docs/flightstatus/v2
//URL : https://api.flightstats.com/flex/flightstatus/rest/v2/json/flight/status/AA/100/arr/2018/4/19?appId=988a22c2&appKey=821beeb54e81057f162e9c1b94a3f6e6&utc=false
router.get('/flightinfo', function(req, res, next) {
    console.log('inHere');
    console.log(req);
    var companyCode  =  req.query.companyCode;
    var airportCode  =  req.query.airportCode;
    var arrivalOrDeparture  =  req.query.status;
    var date  =  req.query.date;
    var finalUri = 'https://api.flightstats.com/flex/flightstatus/rest/v2/json/flight/status/' + companyCode+ '/' + airportCode+ '/' + arrivalOrDeparture +'/' +  date '
    console.log(finalUri);
    request({
        uri: 'https://api.flightstats.com/flex/flightstatus/rest/v2/json/flight/status/' + companyCode+ '/' + airportCode+ '/' + arrivalOrDeparture +'/' +  date ,
        qs: {
            appId: applicationId,
            appKey: key
        }
    }).pipe(res);
});
/* GET home page. */
// DOC : https://developer.flightstats.com/api-docs/weather/v1
router.get('/weather', function(req, res, next) {
    res.render('index', { title: 'POST Test' + applicationId });
});

module.exports = router;
