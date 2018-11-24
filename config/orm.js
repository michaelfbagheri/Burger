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
    }
};


module.exports = orm;
