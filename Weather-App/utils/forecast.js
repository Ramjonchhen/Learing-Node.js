const request = require("request");

require("dotenv").config();

const forecast = (lng, lat, callback) => {
  const API_KEY1 = process.env.API_KEY1;

  const url = `http://api.weatherstack.com/current?access_key=${API_KEY1}&query=${lng},${lat}&units=m`;

  request({ url, json: true }, (error, response) => {
    if (error) {
      callback("error connecting to the network", undefined);
    } else if (response.body.error) {
      callback("Unable to find the location.", undefined);
    } else {
      let currentTemp = response.body.current.temperature;
      let feelsLikeTemp = response.body.current.feelslike;
      let currentWeatherCond = response.body.current.weather_descriptions[0];

      callback(undefined, {
        currTemp: currentTemp,
        feelTemp: feelsLikeTemp,
        currWeatCond: currentWeatherCond,
      });
    }
  });
};

module.exports = forecast;
