// starting with express
const express = require("express");
const app = express();
const cors = require("cors");

// for using environment vaiables
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });

// basic important middle wares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// db service for communicating with the database
const dbService = require("./dbService");
const { response } = require("express");

//create
app.post("/insert", (req, res) => {
  const { name } = req.body;

  const db = dbService.getDbServiceInstance();

  db.insertNewName(name)
    .then((data) => res.json({ data: data }))
    .catch((err) => console.log(err));
});

// read
app.get("/getAll", (req, res) => {
  const db = dbService.getDbServiceInstance();

  db.getAllData()
    .then((data) => {
      res.json({ data: data });
    })
    .catch((err) => {
      console.log(err);
    });
});

// update

app.patch("/update", (req, res) => {
  const { id, name } = req.body;
  const db = dbService.getDbServiceInstance();

  db.updateNameById(id, name)
    .then((result) => res.json({ success: result }))
    .catch((err) => console.log(err));
});

// delete

app.delete("/delete/:id", (req, res) => {
  //console.log(req.params);

  const { id } = req.params;

  const db = dbService.getDbServiceInstance();

  db.deleteRowByID(id)
    .then((data) => {
      console.log(data);
      res.json({ success: data });
    })
    .catch((err) => console.log(err));
});

app.listen(process.env.PORT, () => {
  console.log("app is running at port", process.env.PORT);
});
