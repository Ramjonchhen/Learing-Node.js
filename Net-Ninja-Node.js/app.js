const express = require("express");
// express app
const app = express();

// importing the mongoose library
const mongoose = require("mongoose");

debugger;

// for the form data validation
const { urlencoded } = require("express");
const { render } = require("ejs");

const blogRoute = require("./routes/blogRoutes.js");

// database url link
const dburl =
  "mongodb+srv://ram:123@cluster0.qqq1n.mongodb.net/net-ninja-blog-project?retryWrites=true&w=majority";

mongoose
  .connect(dburl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => {
    console.log("Connected to db");
    app.listen(3000);
  })
  .catch((err) => {
    console.log(err);
  });

// register view engines
app.set("view engine", "ejs");

// middle wares and static files
app.use((req, res, next) => {
  console.log("new request made:");
  console.log("host: ", req.hostname);
  console.log("path: ", req.path);
  console.log("method: ", req.method);
  next();
});

app.use((req, res, next) => {
  console.log("2nd middle ware and will find and run the next middleware");
  next();
});

// for making the static file acessible
app.use(express.static("public"));

// parsing form data middleware
app.use(express.urlencoded({ extended: true }));

// routes
app.get("/", (req, res) => {
  res.redirect("/blogs");
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

app.use("/blogs", blogRoute);
