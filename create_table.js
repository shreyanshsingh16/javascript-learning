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

  // Drop table if it already exists (for testing/demo purposes)
  var dropSql = "DROP TABLE IF EXISTS users";
  con.query(dropSql, function (err, result) {
    if (err) throw err;

    // Now create the table with a UNIQUE constraint on email
    var createSql = `
      CREATE TABLE users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255),
        email VARCHAR(255) UNIQUE
      )
    `;

    con.query(createSql, function (err, result) {
      if (err) throw err;
      console.log("Table created with UNIQUE email constraint.");
      con.end();
    });
  });
});
