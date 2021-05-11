const express = require("express");

// express app
const app = express();

// listening for request
app.listen(3000);

console.log(__dirname);

// listening to the request
app.get("/", (req, res) => {
  res.sendFile("./views/index.html", { root: __dirname });
});

app.get("/about", (req, res) => {
  res.sendFile("./views/about.html", { root: __dirname });
});

// re-directs page
app.get("/about-me", (req, res) => {
  res.redirect("/about");
});

app.use((req, res) => {
  res.status(404).sendFile("./views/error404.html", { root: __dirname });
});
