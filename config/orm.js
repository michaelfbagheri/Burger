var connection = require('./connection.js');



var orm = {
    selectAll: function () {
        console.log('inside the selectAll method on orm page')
        return new Promise((resolve, reject) => {
            connection.query('SELECT * FROM burger', function (err, result) {
                if (err) reject(err);
                resolve(result);
            });
        });
    },
    addBurger: function(value){        
        var newBurgerName = value.toString();
        console.log('inside the addBurger method on orm page trying to add' + newBurgerName)
        return new Promise((resolve,reject) => {
            var queryString = "INSERT INTO burger (burger_name) VALUES (?)";
            connection.query(queryString,[newBurgerName],function(err,result) {
                if (err) reject(err);
                resolve(result);
            });
        });

    }
};


module.exports = orm;
