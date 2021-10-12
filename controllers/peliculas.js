const PeliculasService = require('../services/peliculas');

// Now the controller is using the services associated to the product resource.
// Here, we use the req,res, extracting whatever the service needs to work.

module.exports = {
    
    getAllPeliculas: async(req, res, next) => {       
        const peliculas = await PeliculasService.getAllPeliculas();
        res.status(200).json({peliculas});
    }
    
};

