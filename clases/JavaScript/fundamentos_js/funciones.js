//Para que se pida el dato por consola node.js
const prompt = require('prompt-sync')();

//Declaramos la función
function tablaMultiplicacion() {
  const numero = parseInt(prompt('Ingrese un número: '));
  for (let i = 1; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
  }
}

//llamamos la función
tablaMultiplicacion();