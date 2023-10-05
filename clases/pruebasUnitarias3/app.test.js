const request = require('supertest');
const registro = require('./app');

describe('pruebas unitarias registro de usuarios', () => {
    it('Debería crear un usuario y devolver una solicitud POST', async() => {
        //la variable debe ser igual al que declaré en en el app.js
        const newUser = {
            username: 'lui',
            email: 'lui@gmail.com'
        }

        const respuesta = await request(registro).post('/registro').send(newUser);

        expect(respuesta.status).toBe(201);
        expect(respuesta.body).toEqual(newUser);
    });

    it('Debería obtener registro de usuarios al hacer solicitud GET', async() => {
        const respuesta = await request(registro).get('/registro');

        expect(respuesta.status).toBe(200);
        //cuerpo de ls respuesta
        expect(Array.isArray(respuesta.body)).toBe(true);
    });

    //se hace petición POST para datos 
    it('debería devolver un error al crear usuario con datos vacíos', async () => {
        const respuesta = await request(registro).post('/registro').send({});

        //verifica petición incorrecta
        expect(respuesta.status).toBe(400);
        expect(respuesta.body.error).toBe('Usuario o correo incorrectos');
    });
});