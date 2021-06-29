import { createRequire } from 'module';
const require = createRequire(import.meta.url);
var axios = require("axios").default;

var options = {
  method: 'GET',
  url: 'https://community-open-weather-map.p.rapidapi.com/weather',
  params: {
    q: 'Chennai,India',
    lat: '0',
    lon: '0',
    callback: 'test',
    id: '2172797',
    lang: 'null',
    units: '"metric" or "imperial"',
    mode: 'xml, html'
  },
  headers: {
    'x-rapidapi-key': 'ff93ad167bmshbd7a6a92ee22113p1e5146jsn6004422388d2',
    'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});
