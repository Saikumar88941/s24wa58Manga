var express=require('express')
var router=express.Router();

router.get('/',function(req,res,next){
    var a=Math.atan()*150;
    var b=Math.atan()*250;
    var c=Math.atan()*300;

    var funcOne=Math.atan(a);
    var funcTwo=Math.exp(b);
    var funcThree=Math.expm1(c);

    res.send(`Random no's are ${a}, ${b} and ${c} <br>
    Math.atan applied to ${a} is ${funcOne} <br>
    Math.exp applied to ${b} is ${funcTwo} <br>
    Math.expm1 applied to ${c} is ${funcThree}`);
});

module.exports=router;