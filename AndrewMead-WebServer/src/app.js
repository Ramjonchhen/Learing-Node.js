const path = require("path");
const express = require("express");
const hbs = require("hbs");

const app = express();

// path for view engine and public static files
const viewPath = path.join("__dirname", "../templates/views");
const publicDirPath = path.join(__dirname, "../public");
const partialPath = path.join(__dirname, "../templates/partials");

// setting up the handle bars and the views path
app.set("view engine", "hbs");
app.set("views", viewPath);

// setting the path of the partials for hbs
hbs.registerPartials(partialPath);

// setting up the static directory
app.use(express.static(publicDirPath));

app.get("", (req, res) => {
  res.render("index", {
    title: "Weather app",
    name: "Ram Jonchhen",
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    title: "Help Page",
    message: "Welecome to the help page you are welcome to ask any question",
    name: "Ram Jonchhen",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About Page",
    name: "Ram Jonchhen",
  });
});

app.get("/weather", (req, res) => {
  res.send({
    location: "ktm",
    forecast: "rainy",
  });
});

app.listen(3000, () => {
  console.log("server is started in the port 3000");
});
