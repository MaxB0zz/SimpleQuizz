var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: ""
});

con.connect(function (err){
    if (err) throw err;
    console.log("Database connected.");
    con.query("CREATE DATABASE IF NOT EXISTS qcms", function (err, result){
       if (err) throw err;
       console.log("Database Created.");
    });
});