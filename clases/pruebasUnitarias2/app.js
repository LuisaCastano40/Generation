// Realizaremos un programa de Saludo

//Importamos el servidor express
const express = require('express');

//creamos una instancia de la aplicación Express y se lo asignamos a la variable (nos permite usar el servidor de express)
const app = express();

//Habilitar el uso de JSON para procesar solicitudes
//para usar el JSON usamos el .use
app.use(express.json());

const users = [];


//ruta POST para agregar un nuevo usuario
app.post('/users', (req, res) => {
    //extrae los datos del cuerpo de la solicitud
    const {id, name, email} = req.body;
    //crea un nuevo objeto de usuario con los datos proporcionados
    const newUser = {id, name, email};
    //agrega el nuevo usuario al arreglo que se inicializó
    users.push(newUser);
    //Si todo es correcto, responderá con un código de estado 201 (creación exitosa)
    res.status(201).json(newUser);
})


//Definimos una ruta GET para obtener la lista de usuarios
app.get('/users', (req, res) => {
    //si todo correcto, responde con un código estado 200
    res.status(200).json(users)
});

module.exports = app;