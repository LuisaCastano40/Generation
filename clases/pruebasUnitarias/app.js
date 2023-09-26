// Realizaremos un programa de Saludo

//Importamos el servidor express
const express = require('express');

//creamos una instancia de la aplicación Express y se lo asignamos a la variable (nos permite usar el servidor de express)
const app = express();

//Configuramos una ruta para manejar la solicitud get a la raíz de la aplicación (nuestro index.html)
app.get('/', (req, res) =>{
    //código respuesta en el servidor con estos código gracias al supertest
    res.status(200).json({message: '¡Hola, mundo!'});
    //si la solicitud fue exitosa, sale un mensaje hola mundo
});

//Exporta la instancia app para que pueda ser utilizados en otros archivos
//Express es module de node, por eso se exporta el module
module.exports = app;