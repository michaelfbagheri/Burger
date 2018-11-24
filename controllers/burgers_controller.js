var express = require("express");
var router = express.Router();
var burger = require('../models/burger.js');

router.get('/', function(req,res){
    console.log('burgers_controllers page')
    burger.showAll((data) => {
        var hbsObject = {
            burger: data
        };
        console.log('returned from the model' + hbsObject);
        res.render('index',hbsObject)
    })
});





module.exports = router;
