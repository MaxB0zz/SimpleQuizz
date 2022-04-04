var mysql = require("mysql");
var async = require("async");
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "qcms"
});

class Requests {
    constructor() {
        this.id = 1;
        this.output = [];
    }
    test_connection()
    {
        con.connect(function (err) {
            if (err) throw err;
        });
        console.log("connection made.")
    }

    setOutput(rows) {
        this.output = rows;
        console.log(output);
    }

    setId(id)
    {
        this.id = id;
    }

    set_id(new_id)
    {
        con.connect(function (err){
            if (err) throw err;
            con.query("SELECT id FROM qcm", function (err, result, fields){
                if (err) throw err;
                let found = 0;
                for (var elem in result){
                    if (elem == new_id)
                        found = 1;
                }
                if (found == 1)
                {
                    this.setId(new_id);
                    console.log("id set." + this.id);
                }
                else
                {
                    console.log("wrong identifier");
                }
            });
        });
        console.log(this.id);
    }
    show_ids()
    {
        con.connect(function (err){
            if (err) throw err;
            con.query("SELECT id FROM qcm", function (err, result, fields){
                if (err) throw err;
                //for (var elem in result){
                //    console.log(elem);
            });
        });
    }
    get_title()
    {
        if (this.id == -1)
        {
            return;
        }
        con.connect(function (err){
            //if (err) throw err;
            con.query("SELECT title FROM qcm WHERE id = "+ 1, function (err, result, fields){
                if (err) throw err;
                console.log(result);
            });
        });
    }
    append_qcm(title, descriptions)
    {
        con.connect(function (err){
            if (err) throw err;
            con.query("INSERT INTO qcm VALUES(default, \'"+title+"\', \'"+descriptions+"\')", function (err, result){
                if (err) throw err;
                console.log("Added One Qcm.");
            });
        });
    }
}

var req = new Requests();
req.set_id(2);
req.get_title();
