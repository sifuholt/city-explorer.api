'use strict';

const axios = require('axios');

let cache = require('./cache.js');

function getWeather(lat, lon) {
  const key = 'weather-' + lat + lon;
  const url = `https://api.weatherbit.io/v2.0/forecast/daily?key=${process.env.WEATHER_API_KEY}&lat=${lat}&lon=${lon}&days=5&units=I`;
  console.log(url);

  if (cache[key] && (Date.now() - cache[key].timeStamp < 100000)) {
    console.log('We got a hit!');

  } else {
    console.log('Not Quite...');
    cache[key] = {};
    cache[key].timeStamp = Date.now();
    cache[key].data = axios.get(url)
      .then(response => parseWeather(response.data));

  }

  return cache[key].data;

}

function parseWeather(weatherData) {
  try {
    console.log(weatherData);

    const weatherSummaries = weatherData.data.map(day => {
      return new Weather(day);

    });
    return Promise.resolve(weatherSummaries);
  } catch (e) {
    return Promise.reject(e);

  }
}

class Weather {
  constructor(day) {
    this.forecast = day.weather.description;
    this.time = day.datetime;

  }
}

module.exports = getWeather;

