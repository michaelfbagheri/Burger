var connection = require('./connection.js');



var orm = {
    selectAll: function(burger) {
        connection.query('SELECT * FROM burger', function(err,res){
            if (err) throw err;
            console.log(res);
        });
    },
    insertOne: function(input) {
        var query = 'INSERT INTO burger (burger_name) VALUES (??)'
        connection.query(query,[input], function(err,res){
            if (err) throw err;
            console.log(res);
        });
    },
    updateOne: function(input){
        var query = 'UPDATE burger SET devoured = 1, WHERE burger_name = ??'
        connection.query(query,[input], function(err,res){
            if (err) throw err;
            console.log(res);
        })
    }
}

module.exports = orm;
