const request = require("postman-request");

const geocode = (address, callback) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
    address
  )}.json?access_token=pk.eyJ1IjoidHJhbnZhbnN1IiwiYSI6ImNsY2JtbjJ0YTIxM3Yzb2w3NmMwdWd5aG4ifQ.IxU7EN9bGwBeualNAT48ag&limit=1`;

  request({ url, json: true }, (err, res) => {
    if (err) {
      callback("Unable to connect to location services!", undefined);
    } else if (res.body.features.length === 0) {
      callback("Unable to find location. Try another search.", undefined);
    } else {
      callback(undefined, {
        latitude: res.body.features[0].center[1],
        longtitude: res.body.features[0].center[0],
        location: res.body.features[0].place_name,
      });
    }
  });
};

module.exports = geocode;
