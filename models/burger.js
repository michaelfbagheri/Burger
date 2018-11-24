var orm = require('./../config/orm.js');

var burger = {
showAll: function () {
    console.log('inside burger.js page')
    orm.selectAll().then((result) => {
        var data = result;
    }).catch((err) => {
        throw err;
    });
}


};


module.exports = burger;
