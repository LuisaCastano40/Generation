//Este archivo nos ayuda a realizar pruebas al servidor

//Importamos el módulo supertest para realizar las pruebas al servidor (HTTP)
const request = require('supertest');

//Importamos la instancia de la aplicación app que declaramos en el archivo anterior
const app = require('./app');

//Iniciamos una descripción de las pruebas unitarias
describe('Pruebas unitarias para app.js', ()=>{
    //Definimos una prueba que verificará si el msj se envió correctamente
    it('Debería devolver un mensaje de saludo al hacer una solicitud GET', async () => {
        //Realizaremos una solicitud GET a la ruta de la aplicación usando el supertest
        //Verifica que el estado de la respuesta sea 200 (ok)
        const response = await request(app).get('/');

        expect(response.status).toBe(200);
        expect(response.body.message).toBe('¡Hola, mundo!');
    });
});