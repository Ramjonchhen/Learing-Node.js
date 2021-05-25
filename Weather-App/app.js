const geoCode = require("./utils/geocode");
const forecast = require("./utils/forecast");

if (process.argv[2] === undefined) {
  return console.error("location not passed in command");
}

geoCode(process.argv[2], (error, result) => {
  if (error) {
    return console.error(error);
  }

  forecast(result.latitude, result.longitude, (error, forecastData) => {
    if (error) {
      return console.error(error);
    }

    console.log(result.location);
    console.log(forecastData);
  });
});
