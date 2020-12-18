const request = require("postman-request");

const forecast = (latitude, longitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=eaa4a6a512eeccb553a8182644a8d19c&query=${latitude},${longitude}`;

  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback("Unable to connect to location!", undefined);
    } else if (response.body.error) {
      callback(response.body.error.info, undefined);
    } else {
      callback(
        undefined,
        `${response.body.current.weather_descriptions[0]}. It is currently ${response.body.current.temperature} degrees out. There is a ${response.body.current.precip} chance of rain.`
      );
    }
  });
};

module.exports = forecast;
