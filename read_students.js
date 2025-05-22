var mysql = require("mysql2");
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "test",
});
con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
  con.query("SELECT * FROM users ", function (err, result) {
    if (err) throw err;
    console.log("Users Records ");
    console.log(result);
  });
});
