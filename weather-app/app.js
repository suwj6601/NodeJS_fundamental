const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

const address = process.argv[2];

if (!address) {
  console.log("Please provide a valid address");
} else {
  geocode(address, (err, data) => {
    console.log("Data: ", data);

    if (err) {
      return console.log(err);
    } else {
      const { latitude, longtitude } = data;
      forecast(latitude, longtitude, (err, forecastData) => {
        if (err) {
          return console.log("err: ", err);
        }

        console.log(data.location);
        console.log(forecastData);
      });
    }
  });
}
