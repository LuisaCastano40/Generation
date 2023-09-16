const nombres = [];

function agregarNombre() {

    const nombreInput = document.getElementById('nombre');
    const nombre = nombreInput.value;
    console.log(nombre)

    if (nombres.includes(nombre)) {
        alert('Este nombre ya existe, ingrese otro');
        nombreInput.value = "";
    } else if (nombre !== '') {
        nombres.push(nombre);
        nombreInput.value = "";
        const listaNombres = document.getElementById("lista-nombres");
        listaNombres.innerHTML = "";

        for (let i = 0; i < nombres.length; i++) {
            const li = document.createElement("li");
            li.textContent = nombres[i];
            listaNombres.appendChild(li);
        }
    } else {
        alert('Campo vacío, ingrese un nombre')
    }
}