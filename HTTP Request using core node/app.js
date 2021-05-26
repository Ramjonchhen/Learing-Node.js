const http = require("http");
require("dotenv").config();

const API_KEY1 = process.env.API_KEY1;
const url = `http://api.weatherstack.com/current?access_key=${API_KEY1}&query=37.9,-122.08&units=m`;

const request = http.request(url, (response) => {
  let string = "";

  response.on("data", (chunk) => {
    string = string + chunk.toString();
  });

  response.on("end", () => {
    const parsedData = JSON.parse(string);
    console.log(parsedData);
  });
});

request.on("error", (err) => {
  console.error(err);
});

request.end();
