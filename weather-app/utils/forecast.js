const request = require("postman-request");

const forecast = (latitude, longtitude, callback) => {
  const urlWeatherStack = `http://api.weatherstack.com/current?access_key=20ead43f43163171f0a01a25cfe29a38&query=${latitude}, ${longtitude}
  }&units=f`;

  request({ url: urlWeatherStack, json: true }, (err, res) => {
    if (err) {
      callback("Unable to connect to weather service!", undefined);
    } else if (res.body.error) {
      callback("Unable to find location", undefined);
    } else {
      callback(undefined, {
        temperature: res.body.current.temperature,
        feelslike: res.body.current.feelslike,
        humidity: res.body.current.humidity,
      });
    }
  });
};
module.exports = forecast;
