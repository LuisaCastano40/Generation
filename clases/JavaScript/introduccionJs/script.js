function sumar() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);

    let result = num1+num2;
    console.log(result);

    let span = document.getElementById('resultado');
    span.innerHTML = `${result}`

}

let colores = ["red", "blue", "green", "yellow", "purple"];
let indice=0;

function cambiarColor(){
    document.body.style.backgroundColor = colores[indice];
    indice =(indice + 1) % colores.length;
}