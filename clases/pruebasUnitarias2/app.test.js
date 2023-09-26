//Este archivo nos ayuda a realizar pruebas al servidor

//Importamos el módulo supertest para realizar las pruebas al servidor (HTTP)
const request = require('supertest');

//Importamos la instancia de la aplicación app que declaramos en el archivo anterior
//No requiero el .js porque el text reconoce el archivo sobre el cual está haciendo la prueba
const app = require('./app');

//Iniciamos una descripción de las pruebas unitarias
describe('Pruebas unitarias para app.js (creación y obtención de usuario)', ()=>{

    it('Debería crear un usuario y devolverlo al hacer una solicitud POST', async () => {
    //Define un nuevo usuario que se utilizará en la prueba
    const newUser = {
        id: 1,
        name: 'Luisa',
        email:'loise@gmail.com'
    }

    //Realizaremos una solicitud POST a '/users' con el nuevo usuario
   
    const response = await request(app).post('/users').send(newUser);
    //verifica que el código del estado de la respuesta sea 201 (creado con éxito)
    expect(response.status).toBe(201);

    //verificar que el cuerpo de la respuesta sea igual al nuevo usuario
    //toEqual compara
    expect(response.body).toEqual(newUser);
    });

    it ('Debería obtener la lista de usuarios al hacer una solicitud GET', async() => {
        //Realiza la solicitud GET a la raiz
        const response = await request(app).get('/users');

        //verificar el código sea 200 (ok)
        expect(response.status).toBe(200);
        //verificar que el cuerpo de la respuesta sea un arreglo
        expect(Array.isArray(response.body)).toBe(true);
    });
});