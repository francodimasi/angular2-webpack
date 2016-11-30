var express = require('express');
var router = express.Router();
var Cloudant = require('cloudant');
var cloudant = Cloudant("https://0507a4c9-784f-41e0-bc7c-8de4d68be77f-bluemix:1c484579e88edee90350072d8f0fb57f23bf27a0228a6839367ac3bbbf415ad2@0507a4c9-784f-41e0-bc7c-8de4d68be77f-bluemix.cloudant.com/");

/* GET home page. */
router.get('/', function(req, res, next) {

});

router.get('/tweets', function(req, res, next) {

    var tweets = cloudant.db.use('tweets');


});

module.exports = router;
