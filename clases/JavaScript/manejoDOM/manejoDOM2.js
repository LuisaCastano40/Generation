//Realizar un programa que permita cambiar el título cada que oprima el botón

function cambiarTitulo(){
    // Iniciamos la variable que captura el valor
    let tituloElement = document.getElementById('titulo');

    if(tituloElement.innerHTML === 'Hola desarrolladores'){
        tituloElement.innerHTML="hello development";
    }else{
        tituloElement.innerHTML="Hola desarrolladores";
    }
}

//Opción corecta

/* 
function cambiarTitulo() {
    // Iniciamos la variable que captura el valor
    let tituloElement = document.getElementById("titulo");
    let tituloValue = tituloElement.value;

    if (tituloValue === "Hola desarrolladores") {
        tituloElement.textContent = "hello development";
    }
}

*/

//variables globales
const input = document.getElementById('myInput');
const list = document.getElementById('myList');

//keyup, lee cuando se suelta la tecla enter
input.addEventListener("keyup",function(event) {

    if(event.key === 'Enter' && input.value !== ''){
        // Crear nuevo elemento en la lista
        const newItem = document.createElement('li');
        
        //Insertamos contenido HTML
        newItem.textContent = input.value;
        //Agregamos los elementos una por debajo de la otra
        list.appendChild(newItem);

        input.value='';
        // list.innerHTML = '';
    }
}); 

// Registro de usuario

//variables globales
let nombre = document.getElementById('nombre');
let correo = document.getElementById('correo');
let lista = document.getElementById('List');
let boton = document.querySelector('.btn');

boton.addEventListener('click', mostrarDatos);

function mostrarDatos() {
    let valNombre=nombre.value;
    let valCorreo=correo.value;
    console.log(valNombre);
    console.log(valCorreo);
    
    if(valNombre !== '' && valCorreo !== ''){

        lista.innerHTML += `<li> nombre de usuario: ${valNombre}, correo del usuario: ${valCorreo}</li>`
    }else{
        alert('llene los datos')
    }
}