const path = require("path");

const express = require("express");

const app = express();

// for using public folder for express static
const publicDirPath = path.join(__dirname, "../public");

app.use(express.static(publicDirPath));

app.get("/help", (req, res) => {
  res.redirect("help.html");
});

app.get("/about", (req, res) => {
  res.redirect("about.html");
});

app.get("/weather", (req, res) => {
  res.send({
    location: "ktm",
    forecast: "rainy",
  });
});

app.listen(3000, () => {
  console.log("server is statred in the port 3000");
});
