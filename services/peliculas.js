const mongoose = require('mongoose');
const PeliculasModel = require('../models/peliculas')


const getAllPeliculas = async() => {
    const peliculas = await PeliculasModel.find({});

    return peliculas;
};


module.exports = {
    getAllPeliculas
};
