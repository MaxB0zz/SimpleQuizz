var mysql = require("mysql");

var con = mysql.createConnection({
    database: "qcms",
    host: "localhost",
    user: "root"
});

con.connect(function (err){
   if (err) throw err;
   console.log("Connected to Qcms.");
    con.query("DROP TABLE IF EXISTS qcm"); //seulement pour les tests, a supprimer plus tard!
    var req = "CREATE TABLE IF NOT EXISTS qcm (id INT AUTO_INCREMENT PRIMARY KEY, title VARCHAR(255), description VARCHAR(255))";
   con.query(req, function (err, result){
      if (err) throw err;
      console.log("Created table qcm.");
   });
});

con.connect(function (err){
    //if (err) throw err;
    console.log("Connected to Qcms.");
    con.query("DROP TABLE IF EXISTS qcm_answers"); //seulement pour les tests, a supprimer plus tard!
    var req = "CREATE TABLE IF NOT EXISTS qcm_answers (id_qcm INT, answers VARCHAR(255), correct_ INT)";
    con.query(req, function (err, result){
        if (err) throw err;
        console.log("Created table qcm.");
    });
});