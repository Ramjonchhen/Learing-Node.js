const request = require("request");

require("dotenv").config();

const API_KEY = process.env.API_KEY;

const url = `http://api.weatherstack.com/current?access_key=${API_KEY}&query=37.8267,-122.4233&units=f`;

request({ url, json: true }, (error, response) => {
  let currentTemp = response.body.current.temperature;
  let feelsLikeTemp = response.body.current.feelslike;
  let currentWeatherCond = response.body.current.weather_descriptions[0];

  console.log(currentWeatherCond);
  console.log("It is currently " + currentTemp + " degrees out. ");
  console.log("It feels like " + feelsLikeTemp + " degrees out.");
});
