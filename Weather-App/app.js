const request = require("request");

require("dotenv").config();

const API_KEY1 = process.env.API_KEY1;

const url = `http://api.weatherstack.com/current?access_key=${API_KEY1}&query=37.8267,-122.4233&units=f`;

// request({ url, json: true }, (error, response) => {
//   if (error) {
//     console.log("error connecting to the network");
//   } else if (response.body.error) {
//     console.log("Unable to find the location.");
//   } else {
//     let currentTemp = response.body.current.temperature;
//     let feelsLikeTemp = response.body.current.feelslike;
//     let currentWeatherCond = response.body.current.weather_descriptions[0];

//     console.log(currentWeatherCond);
//     console.log("It is currently " + currentTemp + " degrees out. ");
//     console.log("It feels like " + feelsLikeTemp + " degrees out.");
//   }
// });

const API_KEY2 = process.env.API_KEY2;

const url2 = `https://api.mapbox.com/geocoding/v5/mapbox.places/12xasf3ruru.json?access_token=${API_KEY2}&limit=1`;

request({ url: url2, json: true }, (error, response) => {
  if (error) {
    console.log("unable to connect to the api");
    console.log(error);
  } else if (!response.body.features.length) {
    console.log("Unable to find location. Please try next location.");
  } else {
    const latitude = response.body.features[0].center[1];
    const longitude = response.body.features[0].center[0];
  }
});
