//Inicializamos arreglo
let numeros = [];


//Las funciones solo reciben datos tipo string
function obtenerNumeros() {
    //Inicializamos una variable que recibirá los datos del elemento
    const cantidadInput = document.getElementById('cantidad');//cuando arreglos, una variable recibe y otra almacena el valor

    const cantidad = parseFloat(cantidadInput.value);

    //Inicializar un condicional que verifique si el dato es mayor que cero
    if(cantidad > 0) {
        const listaNumeros = document.getElementById('lista-numeros');

        listaNumeros.innerHTML = "";

        //bucle que se ejecutará dependiendo la cantidad de números que ingresemos
        for(let i=0; i<cantidad; i++) {
            const numero = prompt("Ingrese el número " + (i+1) + ";");
            numeros.push(parseFloat(numero));
            const li = document.createElement("li");
            li.textContent = numero;
            listaNumeros.appendChild(li);
        }
    }
}

//Inicialización de la función
function calcularPromedio(){
    //recibe el elemento párrafo
    const resultadoElemento = document.getElementById("resultado");

    //Crearemos un condicional
    if(numeros.length>0) {

        //El reduce, se usa para recorrer de forma más rápida el arreglo, usa un acumulador (total) y cumero actual (numero) y ejecuta lo que está dentro de de la función flecha
        const suma = numeros.reduce((total, numero) => total + numero, 0);
        const promedio = suma/numeros.length;
        resultadoElemento.textContent = "El promedio es: " + promedio.toFixed(2);
    } else{
        resultadoElemento.textContent = "No se ingresaron datos, por favor insértalos"
    }
}