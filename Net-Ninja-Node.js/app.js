const express = require("express");

// express app
const app = express();

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

// listening to the request
app.get("/", (req, res) => {
  const blogs = [
    // {
    //   title: "Yoshi finds eggs",
    //   snippet: "Lorem ipsum dolor sit amet consectetur",
    // },
    // {
    //   title: "Mario finds stars",
    //   snippet: "Lorem ipsum dolor sit amet consectetur",
    // },
    // {
    //   title: "How to defeat bowser",
    //   snippet: "Lorem ipsum dolor sit amet consectetur",
    // },
  ];

  res.render("index", { title: "Home", blogs });
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

app.get("/blogs/create", (req, res) => {
  res.render("create", { title: "Create Page" });
});

app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});
