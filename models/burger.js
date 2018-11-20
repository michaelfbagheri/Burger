var orm = require('./../config/orm.js');

var burger = {
showAll: function (cb) {
    orm.selectAll('burger',function(res){
        cb(res);
    });
},
addBurger: function (burgerName,cb){
    orm.insertOne('burger',function(res){
        cb(res);
    });
},
eatBurger: function(burgerName,cb){
    orm.updateOne('burger',function(res){
        cb(res);
    });
}

};


module.exports = burger;
