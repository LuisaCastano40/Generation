"use strict";

//Definir función
function calcularDescuento () {
    //Obtener el valor ingresado por el usuario
    const price = parseFloat(document.getElementById('precio').value);
    let descuento = 0;

    //Calcular el descuento bassado en el precio
    if (price >= 100000 && price < 500000){
        descuento = 10/100;
    }else if (price >= 500000 && price < 1000000) {
        descuento = 20/100;
    }else if (price >= 1000000) {
        descuento = 30/100;
    } else {
        descuento = 0;
    }

    // Calcular el precio final después del descuento
    const precioFinal = price - (price*descuento);

    //Mostrar el precio final
    const p = document.getElementById('resultado');

    p.textContent = `El precio final con descuento es de $ ${precioFinal.toFixed(2)}`
    //toFixed es para establecer cuántos decimales quiero que me muestre
}