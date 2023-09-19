// Escribe un programa en JavaScript que pida al usuario un número y
//  luego imprima todos los números primos entre 1 y el número ingresado.

//importamos el readline de node
const readline = require('readline');

//definimos la interfaz
const interfaz = readline.createInterface({
    input: process.stdin,//standard input - entorno de lectura de node - permite leer datos desde consola
    output: process.stdout//standard output - entorno de escritura de node - permite escribir datos desde consola
});

function mostrarPrimos() {
    interfaz.question('Ingrese un número: ', (numero) => {
        calcularPrimos(numero);
        interfaz.close();
    });
}

function calcularPrimos(num) {
    const numero = parseInt(num);
    console.log(numero);
    const primos = [];
    let contador = 0;

    //Ciclo que vaya desde 2 hasta el número ingresado
    for (let i = 2; i <= numero; i++) {

        //Para verificar si cada número desde i hasta numero es o no primo
        for (let j = 2; j < i; j++) {
            // el residuo de i dividido todos los números hasta antes de sí mismo es 0?
            if (i % j === 0) {

                //aumente el contador de que hay divisor, entonces no es primo
                contador++;
                //sálgase del ciclo porque ya encontró al menos un divisor
                break;
            } else {
                //Si no hubo divisor en este número, garantice que el contador está en cero
                contador = 0;
            }
        }
        //si el contador está en cero, el número i no tiene divisores, entónces agréguelo al arreglo de primos
        if (contador === 0) {
            primos.push(i);
        };
    }
    console.log(`los números primos que hay hasta ${numero} son: ${primos.join(', ')}`);
}

mostrarPrimos();