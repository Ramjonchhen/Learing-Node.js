const mysql = require("mysql");
const express = require("express");
const app = express();

//creating connection through createConneciton
// const conn = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "testdb",
// });

// app.get("/", (req, res) => {
//   conn.connect((err) => {
//     if (err) {
//       console.error(err);
//       return;
//     }
//     console.log("connected as id " + conn.threadId);
//   });
// });

//connection pooling
const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "testdb",
});

app.get("/", (req, res) => {
  pool.getConnection((err, conn) => {
    if (err) throw err;
    console.log("connected as id: " + conn.threadId);
    conn.query("select * from user where name = ?", "ram", (err, rows) => {
      conn.release();
      if (err) throw err;
      console.log("query data: ", rows);
    });
  });
});

app.get("/insert", (req, res) => {
  pool.getConnection((err, conn) => {
    if (err) throw err;
    console.log("connected as id: " + conn.threadId);
    conn.query(
      "insert into user SET ?",
      { name: "bipasna", age: 10 },
      (err, rows) => {
        conn.release();
        if (err) throw err;
        console.log("query data: ", rows);
      }
    );
  });
});

app.listen(3000, () => {
  console.log("listenign to server at the port 3000");
});
