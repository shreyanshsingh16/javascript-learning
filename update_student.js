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
  var sql = "UPDATE users SET email = 'AMAN@rajak.com' WHERE id = 2";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(" Records Updated: ");
  });
});
