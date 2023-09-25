//Inicializamos una variable que nos inicialice el servidor
//Nos trae el servidor
const express = require('express');

//Proporcionamos la ruta de los archivos y elementos que usaremos
const path = require('path');
//se inicializa como una función. La app sabe que estamos haciendo una app de node usando express
const app = express();

//de la variable app (que ejecuta el servido express), le decimos que vamos a usar el servidor express, que tiene los archivos estáticos que están dentro de una carpeta 'public'
app.use(express.static('public'));


//obtiene todos los archivos dentro de la carpeta ('/'), luego ejecuta la fn flecha. donde la respuesta, es que me envíe el archivo que queremos desplegar
//path da la ubicación del archivo
app.get('/', (reg, res) => {
    /*
        El join se encarga de unir todos los argumentos
        El path nos ayuda a ubicar los archivos que queremos
        El sendFile transfiere el archivo a la ruta dada
        sólo podemos tener un index.html
    */
    res.sendFile(path.join(__dirname + '/index.html'));
});

//Activaremos el puerto en donde queremos desplegar nuestro aplicativo
/*app.listen(4000, ()=>{
    console.log('El servidor estácorriendo en el puerto', 4000);
});*/

//que se ubique en el servidor que encuentre disponible
const server = app.listen(0, ()=>{
    console.log('Puerto correindo en: ', server.address().port);
})

