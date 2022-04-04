var mysql = require("mysql");

var con = mysql.createConnection({
    database: "qcms",
    host: "localhost",
    user: "root"
});

let output;

const setOutput = (rows) => {
    output = rows;
}

con.connect(async(err) => {
    if (err) throw err;
    console.log("Connected to Database");
    let query = 'SELECT * FROM qcm';
    con.query(query, (err, rows) => {
        if (err) return err;
        setOutput(rows);
    });
});

console.log(output);