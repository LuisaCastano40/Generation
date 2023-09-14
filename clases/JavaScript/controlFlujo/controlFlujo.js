'use strict'
//Definir función
function generarTabla(){
    //Obtiene los datos que se inserten en el campo del input
    const numero = parseInt(document.getElementById('numero').value);
    const tablaBody = document.querySelector("#tabla tbody");

    //inicializamos el proceso 
    for (let i = 1; i <= 10; i++){

        //el valor con el que se va a multiplicar
        const resultado = numero*i;

        //Nos mostrará en forma de tabla los resultadosde las multiplicaciones
        const row = document.createElement('tr');
        const numeroCell = document.createElement('td');
        const resultadoCell = document.createElement('td');

        //Esta línea nos ayudará a mostrar el número que se insertó
        numeroCell.textContent = `${numero} x ${i}`;

        //Esta línea nos ayuda a mostrar los resultados de la tabla
        resultadoCell.textContent = resultado;


        //row es el elemento padre, y numero cell y resultadoCell son los clild 
        //Importa el orden, el pimer elemento dentro del appenChild es el primero que se visualiza
        row.appendChild(numeroCell);
        row.appendChild(resultadoCell);

        tablaBody.appendChild(row);
    }
}
