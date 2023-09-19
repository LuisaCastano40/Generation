//Programa que diga si aprobó o reprobó un semestre

//Ejercicio mediante condicionales If y Else

//Inicializamos las variables
let calificacion = 3.0;
let resultado = '';

if (calificacion >= 3.0) {
    resultado = 'Aprobado';
} else {
    resultado = 'Reprobado';
}

console.log(`El estudiante está: ${resultado}`);

//Ejercicio mediante operadores ternarios
let calif = 3.0;
let result = calif >= 3.0 ? 'Aprobado' : 'Reprobado';
console.log(`El estudiante está: ${result}`);


//Programa que diga si es par o impar

let numero = 2;
let numPar = '';

if (numero%2 === 0){
    numPar = 'El número es par';
}else {
    numPar = 'El número no es par';
}
console.log(`${numPar}`);

//Ejercicio mediante operadores ternarios
let num = 5;
let Par = num%2 === 0 ? true : false;
console.log(Par ? 'Es un número par': 'Es un número impar');


//Programa que me permita realizar un menú de opciones
let diaDeLaSemana = 'Miércoles';


let actividad = diaDeLaSemana === 'Lunes' ? 'Reunión de equipo': 
                (diaDeLaSemana === 'Miércoles') ? 'Clase de pyton': 'Día libre';
console.log(actividad)

