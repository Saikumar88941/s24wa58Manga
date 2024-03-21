var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    var x = Math.random()*10;
    var y = Math.random()*20;

    var ValueOne = Math.atan(y);
    var ValueTwo = Math.exp(x);
    var ValueThree = Math.expm1(y);

  res.send(`The random numbers are ${x} and ${y} <br> Math.atan applied to ${x} is ${ValueOne} <br>Math.exp applied to ${y} is ${ValueTwo} <br>Math.exmp1 applied to ${x} is ${ValueThree}`);
});

module.exports = router;