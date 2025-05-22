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

  var sql =
    "INSERT INTO users(name, email) VALUES ('shreyansh', 'singhshreyansh@gmail.com'), ('Aman', 'aman@gmail.com')";

  con.query(sql, function (err, result) {
    if (err) {
      if (err.code === "ER_DUP_ENTRY") {
        console.error("Duplicate entry error:", err.sqlMessage);
      } else {
        throw err;
      }
    } else {
      console.log("✅ Number of Records Inserted:", result.affectedRows);
    }
    con.end();
  });
});
