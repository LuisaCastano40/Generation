const readline = require('readline');


//se utilizan al crear una interfaz de lectura y escritura con el módulo readline en Node.js.   
const rl = readline.createInterface({
  input: process.stdin, //se utiliza para leer los datos por teclado
  output: process.stdout //se utiliza para escribir o mostrar los datos por consola
  //process activa el proceso que permite leer o mostrar los datos 
});

function tablaMultiplicacion() {
//solicitamos al usuario un dato
  rl.question('Ingrese un número: ', (numero) => {
    numero = parseInt(numero);
    for (let i = 1; i <= 10; i++) {
      console.log(`${numero} x ${i} = ${numero * i}`);
    }
    rl.close();
  });
}

tablaMultiplicacion();
