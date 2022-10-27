var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/', function(req, res, next) {
var number1 = Math.random() *20;
var number2 = Math.random() *20;
var number3 = Math.random() *20;
var number4 = Math.random() *20;
var cosT = Math.acosh(number1);
var logger = Math.log1p(number2);
var tn = Math.tan(number3);
var sqr = Math.sqrt(number4);
res.render('computation', { title: 'Merugu Rakesh',
number1:number1,
number2:number2,
number3:number3,
number4:number4,
cosT:cosT,
logger:logger,
tn:tn,
sqr:sqr
});
});

module.exports = router;