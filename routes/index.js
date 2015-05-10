var express = require('express');
var qs = require('querystring');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.post('/async', function(req, res, next) {
    console.log("start convert")

    wait(getRandomArbitary(500,2000));
    res.json("");

/*    setTimeout( function() {
        res.json("");
    }, getRandomArbitary(2000,3000));
*/
    console.log("end convert")
});

function getRandomArbitary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function wait (ms){
    var time1 = new Date().getTime();
    var time2 = new Date().getTime();

    while ((time2 -  time1) < ms){
        time2 = new Date().getTime();
    }
}

module.exports = router;
