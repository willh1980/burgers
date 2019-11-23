var mysql = require("mysql");

// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "biggunz0",
  database: "burgers_DB"
});

connection.connect(function(err) {
  if (err) {
    console.error("connection error");
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;


