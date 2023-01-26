'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const getMovies = require('./modules/movies.js');
const getWeather = require('./modules/weather.js');
// const { default: axios } = require('axios');
const app = express();


app.use(cors());

const PORT = process.env.PORT || 3001;

app.get('/movies', getMovies);
app.get('/weather', weatherHandler);


function weatherHandler(request, response) {
  const { lat, lon } = request.query;
  getWeather(lat, lon)
    .then(summaries => response.send(summaries))
    .catch((error) => {
      console.error(error);
      response.status(200).send('Welp, we need to try something else!');

    });
}

app.listen(PORT, () => console.log(`Server is live on ${PORT}`));



// console.log('holyman, I am here!!!');


// requires
// const express = require('express');
// require('dotenv').config();

// const cors = require('cors');

// const getWeather = require('./modules/weather.js');
// const getMovies = require('./modules/movies.js');

//  data require
// 
// const axios = require('axios');
// const { response } = require('express');
// const e = require('express');
// 
// don't forget

// let data = require('./data/')

//  express




//  use express
//  app === server

// const app = express();

//  middleware
// cors security guard

// app.use(cors());


//  define port
// const PORT = process.env.PORT || 3002;

// endpoint
// base
// callback -- 2 parameters

// app.get('/', (request, response) => {
// response.status(200).send('HOLY WOW I FIGURED IT OUT!!');

// });

// 
// app.get('/Weather', (request, response, next) => {
// try {
// let lat = request.query.lat;
// let lon = request.query.lon;
    // let {searchQuery} = request.query;
// 
    // let dataToGroom = data.find(city => city.city_name.toLowerCase() === searchQuery.toLowerCase());
    // let dataToSend = (dataToGroom.data.map((day) => new Forecast(day)));
// 
    // response.status(200).send(dataToSend);
    //
  // }
// });
// 

// app.get('/YASSS', (request, response) => {
  // console.log(request.query);

  // let firstName = request.query.firstName;
  // let lastName = request.query.lastName;

  // response.status(200).send(`Welcome ${firstName} ${lastName}! I can't believe this is something that I have made that you have found!`);

// });


// app.get('/weather', getWeather);

// app.get('/movies', getMovies);


// catch
// app.get('*', (request, response) => {
  // response.status(404).send('this page shall return');
// });


//  error
// app.use((error, request, response) => {
  // response.status(500).send(error.message);
// });


// 
// app.get('/movies', async (request, response, next) => {
  // try {
    // let cityName = request.query.searchQuery;
// 
    // let url = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.MOVIE_API_KEY}&language=en-US&query=${cityName}&page=1&include_adult=false`;
// 
    // let movie
    // let parsedMovie
    // let resultArr
  // }
// })
// 

//  catchall endpoint

// app.get('/weather', (request, response) => {
  // response.status(404).send('Oops, something went wrong.');
// });

//  error handler

// app.use((error, request, response) => {
  // response.status(500).send(error.message);

// });



//  start server
// app.listen(PORT, () => console.log(`I can't believe I am actually able to do this!!!!: ${PORT}`));




// 
// 'use strict';
// 
// require('dotenv').config();
// const express = require('express');
// const cors = require('cors');
// const weather = require('./modules/weather.js');
// const getMovies = require('.modules/movies.js');
// const app = express();
// 
// const PORT = process.env.PORT || 3002;
// app.use(cors());
// 
// app.get('/weather', weatherHandler);
// app.get('/movies', getMovies);
// 
// function weatherHandler(request, response) {
  // const { searchQuery } = request.query;
  // weather(searchQuery)
    // .then(summaries => response.send(summaries))
    // .catch((error) => {
      // console.error(error);
      // response.status(404).send('Oops!. Looks like something went wrong.');
    // });
// }
// 
// app.listen(PORT, () => console.log('Server is UP: ${PORT'));
// 
