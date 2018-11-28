var orm = require('./../config/orm.js');

var burger = {
showAll: function (cb) {
    console.log('inside burger.js page');
    orm.selectAll().then((result) => {
        console.log("promise successfully retunred");
        cb(result);
    }).catch((err) => {
        throw err;
    });
},
addNewBurger: function (value,cb) {
    console.log('inside burger.js page addNewBurger function');
    orm.addBurger(value).then((result) => {
        var data = result;
        console.log('add new burger promise successfuly returned ' + data);
        cb(result);
    }).catch((err) => {
        throw err;
    });
},
eatExistingBurger: function (value,cb) {
    console.log('inside the eatExistingBurger  or the burger.js method')
    orm.eatBurger(value).then((result) =>{
        var data = result;
        console.log('eatBurger primse successfuly returned ' + data)
        cb(result);
    }).catch((err) => {
        throw err;
    });
}


};


module.exports = burger;
