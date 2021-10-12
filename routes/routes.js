const express = require('express');
const router = express.Router();

router.use('/users', require('./users'));

router.use('/peliculas', require('./peliculas'));

router.use('/movies', require('./movies'));



module.exports = router;