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
        expect(Array.isArray(respuesta.body)).toBe(true);
    });
});