const express = require('express');
const app = express();
app.use(express.json());

//donde guardamos la lista
const users = [];

//Definimos la ruta para el registro de usuario
//yo creo la ruta
app.post('/registro', (req, res) => {
    //el req.body me trae el cuerpo del elemento que voy a crear
    const {username, email} = req.body;

    //verificar si tanto el nombre de usuario como el correo están correctos
    if(!username || !email){
        //si no es correcto alguno de los campos
        return res.status(400).json({error: 'Usuario o correo incorrectos'});
        //error o message
    }
    //creamos un objeto que recibirá los datos
    const newUser = {username, email};
    users.push(newUser);

    res.status(201).json(newUser);
});

app.get('/registro', (req,res) => {
    res.status(200).json(users);
});

module.exports = app;