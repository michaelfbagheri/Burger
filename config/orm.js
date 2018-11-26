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

    },
    eatBurger: function(value){
        var BurgerToEat = value.toString();
        console.log('inside orm.eatBurger method so you could eat ' + BurgerToEat)
        return new Promise ((resolve,reject) => {
            var queryString = 'UPDATE burger SET devoured = 1 WHERE burger_name =';
            queryString+='"';
            queryString+=BurgerToEat;
            queryString+='"';

            console.log(queryString)
            connection.query(queryString,function(err,result){
                if (err) reject(err);
                console.log(result)
                resolve (result);
            });
        });
    }
};


module.exports = orm;
