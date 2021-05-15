const express = require("express");
const Blog = require("./models/blogs.js");

// express app
const app = express();

const mongoose = require("mongoose");

const dburl =
  "mongodb+srv://ram:123@cluster0.qqq1n.mongodb.net/net-ninja-blog-project?retryWrites=true&w=majority";

mongoose
  .connect(dburl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => {
    console.log("connected to db");
    app.listen(3000);
  })
  .catch((err) => {
    console.log(err);
  });

// register view engines
app.set("view engine", "ejs");

console.log(__dirname);

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

app.use(express.static("public"));

// routes
app.get("/", (req, res) => {
  res.redirect("/blogs");
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

// blog routes

app.get("/blogs", (req, res) => {
  Blog.find()
    .sort({ createdAt: -1 })
    .then((result) => {
      res.render("index", { title: "All Blogs", blogs: result });
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/blogs/create", (req, res) => {
  res.render("create", { title: "Create Page" });
});

app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});
