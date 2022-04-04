var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    con.query("CREATE TABLE qcms (id INT AUTO_INCREMENT PRIMARY KEY, title VARCHAR(255), desc VARCHAR(255),answers VARCHAR(255), correct int)", function (err, result) { //"CREATE DATABASE IF NOT EXISTS mydb"
        if (err) throw err;
        console.log("Database created");
    });
});
/**
con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "CREATE TABLE IF NOT EXISTS qcms (qcmid int NOT NULL AUTO_INCREMENT, title VARCHAR(255), desc VARCHAR(255),answers VARCHAR(255), correct int)";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Table created");
    });
});**/