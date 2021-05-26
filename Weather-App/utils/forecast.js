const request = require("request");

require("dotenv").config();

const forecast = (lng, lat, callback) => {
  const API_KEY1 = process.env.API_KEY1;

  const url = `http://api.weatherstack.com/current?access_key=${API_KEY1}&query=${lng},${lat}&units=m`;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("error connecting to the network", undefined);
    } else if (body.error) {
      callback("Unable to find the location.", undefined);
    } else {
      callback(
        undefined,
        "The weather is " +
          body.current.weather_descriptions[0] +
          " The temperature feels like " +
          body.current.feelslike +
          " but it is " +
          body.current.temperature
      );
    }
  });
};

module.exports = forecast;
