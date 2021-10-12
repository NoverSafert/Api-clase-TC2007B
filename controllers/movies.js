const MoviesService = require('../services/movies');

// Now the controller is using the services associated to the product resource.
// Here, we use the req,res, extracting whatever the service needs to work.

module.exports = {
    
    getAllMovies: async(req, res, next) => {       
        const movies = await MoviesService.getAllMovies();
        res.status(200).json({movies});
    },

};

