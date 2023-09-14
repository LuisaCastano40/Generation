//Inicializamos el programa


// Solicitamos los datos de entrada
const nombre = prompt('Por favor Ingresa tu nombre:');

const edad = parseInt(prompt('Por favor, ingresa tu edad:'));

const ciudad = prompt('Por favor, ingresa tu ciudad:');

const persona = {
    nombre: nombre,
    edad: edad,
    ciudad: ciudad
};

//Especificamos que la persona debe ser mayor o igual de 18

const esMayor = edad >= 18; //Esto será verdad o falso

//Realizamos la impresión por consola
alert('Tu nombre es: ' + persona.nombre);
console.log('Tu edad es:', persona.edad);
console.log('Tu ciudad es:', persona.ciudad);
console.log('Es meyor de edad:', esMayor);