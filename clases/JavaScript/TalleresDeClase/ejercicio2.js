// Escribe un programa en JavaScript que pida al usuario una palabra y me imprima la cantidad de veces que se repite la letra del dato que se ingreso.

//Definir la función
const contadorLetras = () => 
{
    //lea los datos del usuario

    //leemos la palabra
    const palabra = document.getElementById('palabra').value;

    //leemos la letra
    const letra = document.getElementById('letra').value;

    let contador = 0;

    for(let i=1; i<=palabra.length; i++){
        if(letra == palabra[i]){
            contador++;
        }
    }

     //Mostramos el resultado
     console.log(`la letra ingresada es: ${letra} y se repite ${contador} veces`); 
}