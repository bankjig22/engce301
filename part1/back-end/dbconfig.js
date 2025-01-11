
var dbconfig = {
    development: {
        //connectionLimit : 10,
        host     : '172.26.0.1',
        port     : '3306',
        user     : 'root',
        password : '',
        database : 'moviedb'
    },
    production: {
        //connectionLimit : 10,
        host     : 'localhost',
        port     : '3306',
        user     : 'dbuser',
        password : '1234',
        database : 'moviedb'
    }
    };
module.exports = dbconfig;
