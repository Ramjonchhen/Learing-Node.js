const express = require("express");
const mongoose = require("mongoose");

const app = express();

// connecting to mongodb through mongoose
mongoose
  .connect("mongodb://ram:test@mongo/?authSource=admin")
  .then(() => console.log("connected to db"))
  .catch((err) => console.log(err));

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("<h2>Hi There ram here checking in development level 222</h2>");
});

app.listen(port, () => {
  console.log("listening on port", port);
});
