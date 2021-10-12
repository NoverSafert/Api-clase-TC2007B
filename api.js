const express = require("express");
const app = express()
const dotenv = require('dotenv')
dotenv.config()
//const port = process.env.PORT
const port = 3005

// para utilizar json en los envíos
app.use(express.json())

//Static files
app.use(express.static('src/public'))


const mongoose = require("mongoose")
mongoose.connect('mongodb://localhost:27017/apiclase')
//mongoose.connect('mongodb://172.31.2.29:27017/apiclase')
    .then( () => {
        console.log("Base Datos Conexión Exitosa")
    })
    .catch(err => {
        console.log("Error Contactando a BD")
    })


//Get principal
app.get('/', (req, res, next) =>{
    res.send('Pagina Principal Api Clase')
})

//Todas las rutas    
app.use(require('./routes/routes'));

    
//listen
app.listen(port , () =>{    
    console.log('Escuchando del puerto ' + port)
});