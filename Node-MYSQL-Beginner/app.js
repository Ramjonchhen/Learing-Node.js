const express = require("express");
const mysql = require("mysql");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// mysql

const pool = mysql.createPool({
  user: "root",
  password: "",
  host: "localhost",
  database: "nodejs_beers",
});

// get all beers
app.get("", (req, res) => {
  pool.getConnection((err, conn) => {
    if (err) throw err;
    console.log("connected as id: " + conn.threadId);

    conn.query("select * from beers", (err, rows) => {
      conn.release();

      if (!err) {
        res.send(rows);
      } else {
        console.log(err);
      }
    });
  });
});

// get beer by id
app.get("/:id", (req, res) => {
  pool.getConnection((err, conn) => {
    if (err) throw err;
    console.log("connected as id: " + conn.threadId);

    conn.query(
      "select * from beers where id = ?",
      [req.params.id],
      (err, rows) => {
        conn.release();

        if (!err) {
          res.send(rows);
        } else {
          console.log(err);
        }
      }
    );
  });
});

// delete a record /beer
app.delete("/:id", (req, res) => {
  pool.getConnection((err, conn) => {
    if (err) throw err;
    console.log("connected as id: " + conn.threadId);

    conn.query(
      "delete from beers where id = ?",
      [req.params.id],
      (err, rows) => {
        conn.release();

        if (!err) {
          res.send(rows);
        } else {
          console.log(err);
        }
      }
    );
  });
});

// insert a record /beer
app.post("", (req, res) => {
  pool.getConnection((err, conn) => {
    if (err) throw err;
    console.log("connected as id: " + conn.threadId);

    console.log(req.body);

    conn.query("insert into beers set ?", req.body, (err, rows) => {
      conn.release();

      if (!err) {
        res.send(rows);
      } else {
        console.log(err);
      }
    });
  });
});

// updating a record /beer
app.put("", (req, res) => {
  pool.getConnection((err, conn) => {
    if (err) throw err;
    console.log("connected as id: " + conn.threadId);

    console.log(req.body);

    let { id, name } = req.body;

    conn.query(
      "update beers set name = ? where id = ?",
      [name, id],
      (err, rows) => {
        conn.release();

        if (!err) {
          res.send(rows);
        } else {
          console.log(err);
        }
      }
    );
  });
});

// listening to the port
app.listen(port, () => {
  console.log("listening to the port: ", port);
});
