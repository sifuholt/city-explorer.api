'use strict';

console.log('holyman, I am here!!!');


// requires

const express = require('express');
require('dotenv').config();

const cors = require('cors');


//  data require

const axios = require('axios');
const { response } = require('express');
const e = require('express');

// don't forget

// let data = require('./data/')

//  express




//  use express
//  app === server

const app = express();

//  middleware
// cors security guard

app.use(cors());


//  define port
const PORT = process.env.PORT || 3002;

// endpoint
// base
// callback -- 2 parameters

app.get('/', (request, response) => {
  response.status(200).send('HOLY WOW I FIGURED IT OUT!!');

});

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

app.get('/YASSS', (request, response) => {
  console.log(request.query);

  let firstName = request.query.firstName;
  let lastName = request.query.lastName;

  response.status(200).send(`Welcome ${firstName} ${lastName}! I can't believe this is something that I have made that you have found!`);
});







// catch
app.get('*', (request, response) => {
  response.status(404).send('this page shall return');
});


//  error
app.use((error, request, response, next) => {
  response.status(500).send(eror.message);
});


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


app.get('/weather', (request, response) => {
  response.status(200).send
})



//  start server
app.listen(PORT, () => console.log(`I can't believe I am actually able to do this!!!!: ${PORT}`));


