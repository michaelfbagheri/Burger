var express = require("express");
var router = express.Router();
var burger = require('../models/burger.js');

router.get('/', function(req,res){
    console.log('inside the burgers contoller page get function')
    burger.showAll((data) => {
        var hbsObject = {
            burger: data
        };
        console.log('returned from the model' + hbsObject);
        res.render('index',hbsObject)
    })
});

router.post('/add/burger', function(req,res) {
    console.log('router. post says: you chose to add ' + req.body.burger)
    var burgerToBeAdded = req.body.burger;
    burger.addNewBurger([burgerToBeAdded],(result) => {
      console.log('after the adding of burger, weve returned with below object')
    res.render('index');
    });
});

router.put('/eat/burger', function(req,res){
    console.log('router.put says you chose to eat ' + req.body.burger)
    var burgerToBeEaten = req.body.burger;
    burger.eatExistingBurger([burgerToBeEaten],(result) => {
        console.log('weve returned to the router.put call back from eating the burger')
        res.render('index');
    })
})






module.exports = router;
