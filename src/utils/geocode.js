const request = require("postman-request");

const geocode = (address, callback) => {
  const key =
    "pk.eyJ1IjoianVsaWFub3BlcmluIiwiYSI6ImNraXN5cWtzaDAzc2UydW12dTlmb3l2NzkifQ.xeW43VQ4q7TDmo2LROa3jg";
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=${key}&limit=1`;

  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback("Unable to connect to lcoation!", undefined);
    } else if (response.body.features.length === 0) {
      callback("Unable to find location. Try another search", undefined);
    } else {
      callback(undefined, {
        latitude: response.body.features[0].center[0],
        longitude: response.body.features[0].center[1],
        location: response.body.features[0].place_name,
      });
    }
  });
};

module.exports = geocode;
