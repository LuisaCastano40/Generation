//Escribe un programa en JavaScript que pida al usuario un número y 
//luego imprima el número de veces que aparece ese número en un arreglo.

//definir la función
function pedirNumero() {
    const arreglo = [1, 7, 9, 5, 1, 2, 3, 3];
    let numero = parseInt(prompt('Ingrese el número'));
    let contador = 0;
    
    //nos recorre el arreglo
    //Los [] son asosiados a los arreglos
    for (let i=0; i<=arreglo.length-1; i++){
        if(arreglo[i] === numero){
            contador++;
        }
    }

    //Mostramos el resultado
    console.log(`el numero ingresado es: ${numero} y se repite ${contador} veces`); 
}

pedirNumero();