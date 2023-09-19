//Ejercicio 1: Escribe una función que reciba un arreglo de números y calcule la suma de todos los elementos.

//Importamos readline como módulo de JS i creamos interfaz
const readline = require('readline');
const interfaz = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//Función para pedir al usuario datos por consola
function pedirDatos() {
    interfaz.question('¿cuántos números ingresará al arreglo?', (num) => {
        const cantidad = parseInt(num);
        const datos = []; //declaramos arreglo vacío
        interfaz.close();
    });

}

//Función para calcular sumatoria y mostrarla
function calcularSumatoria(arr) {
    const datos = arr;
    const sumatoria = datos.reduce((total, dato) => {
        return total + dato;
    }, 0);

    console.log(`Los datos ingresados son: ${datos.join(', ')} y la suma de todos los datos es: ${sumatoria}`);
}

//Llamamos la función
pedirDatos();
