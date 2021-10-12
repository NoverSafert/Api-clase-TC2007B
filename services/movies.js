const mongoose = require('mongoose');
const MoviesModel = require('../models/movies');



const getAllMovies = async() => {
    const movies = await MoviesModel.find({});
    return movies;
};


module.exports = {
    getAllMovies
};
