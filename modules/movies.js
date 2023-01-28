'use strict';

const axios = require('axios');

let cache = {};

async function getMovies(request, response, next) {
  try {
    // query is search term. defin search parameters
    let query = request.query.query;
    let key = `${query}Movie`;



    if (cache[key] && (Date.now() - cache[key].timeStamp < 100000)) {
      console.log('using cache data');

    } else {
      // define the url
      console.log('using api data');
      let url = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.MOVIE_API_KEY}&query=${query}&language=en-US&page=1&include_adult=false`;
      // console.log(url); get info
      let dataToGroom = await axios.get(url);
      // parse data
      let movieData = dataToGroom.data.results;

      let movieListings = (movieData.map((movie) => new Movie(movie)));

      cache[key] = {
        data: movieListings,
        timeStamp: Date.now(),

      };
      console.log(cache);


    }
    response.status(200).send(cache[key].data);

  } catch (error) {
    next(error);
  }
}

class Movie {
  constructor(movie) {
    this.title = movie.title;
    this.description = movie.overview;

  }
}

module.exports = getMovies;

