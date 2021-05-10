const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);

  let path = "./views/";

  switch (req.url) {
    case "/":
      path += "index.html";
      res.statusCode = 200;
      break;

    case "/about":
      path += "about.html";
      res.statusCode = 200;
      break;

    case "/about-me":
      res.statusCode = 301;
      res.setHeader("location", "/about");
      res.end();
      break;
    default:
      path += "error404.html";
      res.statusCode = 404;
      break;
  }

  console.log(path);

  // set header content type
  res.setHeader("content-type", "html");
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log("error occured while reading the file");
      res.end();
    } else {
      res.end(data);
    }
  });
});

server.listen(3000, "localhost", () => {
  console.log("listening for the request on the port 3000.");
});
