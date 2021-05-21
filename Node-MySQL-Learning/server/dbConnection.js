const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "webapp",
  port: 3306,
});

connection.connect((err) => {
  if (err) {
    console.err(err);
    return;
  }
  console.log("connected to db");
});

