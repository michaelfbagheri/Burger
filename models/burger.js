var orm = require('./../config/orm.js');

var burger = {
showAll: function (cb) {
    console.log('inside burger.js page')
    orm.selectAll().then((result) => {
        var data = result;
        console.log("promise successfully retunred")
        console.log(data)
        cb(result)
    }).catch((err) => {
        throw err;
    });
}


};


module.exports = burger;
