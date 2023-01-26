'use strict';

const axios = require('axios');

let cache = {};

async function getMovies(request, response, next) {
  try {
    let query = request.query.query;
    let key = `${query}Movie`;



    if (cache[key] && (Date.now() - cache[key].timeStamp < 100000)) {
      console.log('Finally!');

    } else {
      console.log('finally?');
      let url = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.MOVIE_API_KEY}&query=${query}&language=en-US&page=1&include_adult=false`;
      console.log(url);
      let dataToGroom = await axios.get(url);
      let movieData = dataToGroom.data.results;
      console.log(movieData);

      let movieListings = (movieData.map((movie) => new Movie(movie)));

      cache[key] = {
        data: movieListings,
        timeStamp: Date.now(),

      };


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

