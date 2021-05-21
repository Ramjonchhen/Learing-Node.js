const express = require("express");
const app = express();

const cors = require("cors");
const { response } = require("express");

const port = process.env.PORT || 4040;

const dbConnection = require("./dbConnection");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// create
app.post("/create", (req, res) => {});

// read
app.get("/getAll", (req, res) => {
  res.json({
    success: true,
  });
});

//update

//delete

app.listen(port, () => {
  console.log("app is running from the port: " + port);
});
