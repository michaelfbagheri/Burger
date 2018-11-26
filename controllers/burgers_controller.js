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
      for (var i in result){
          console.log(result[i]);
      }
    res.render('index');
    });
});






module.exports = router;
