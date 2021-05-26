const geoCode = require("./utils/geocode");
const forecast = require("./utils/forecast");

if (process.argv[2] === undefined) {
  return console.error("location not passed in command");
}

geoCode(process.argv[2], (error, { latitude, longitude, location } = {}) => {
  if (error) {
    return console.error(error);
  }

  forecast(latitude, longitude, (error, forecastData) => {
    if (error) {
      return console.error(error);
    }

    console.log("In " + location);
    console.log(forecastData);
  });
});
