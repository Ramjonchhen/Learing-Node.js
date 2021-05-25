const request = require("request");

require("dotenv").config();

const geoCode = (address, callback) => {
  const API_KEY2 = process.env.API_KEY2;

  const url2 = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
    address
  )}.json?access_token=${API_KEY2}&limit=1`;

  request({ url: url2, json: true }, (error, response) => {
    if (error) {
      callback("Unable to connect to the API", undefined);
    } else if (!response.body.features.length) {
      callback("Unable to find the location. Please try another location.");
    } else {
      callback(undefined, {
        latitude: response.body.features[0].center[1],
        longitude: response.body.features[0].center[0],
        location: response.body.features[0].place_name,
      });
    }
  });
};

module.exports = geoCode;
