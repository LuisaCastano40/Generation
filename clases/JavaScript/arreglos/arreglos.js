//Se inicializa un arreglo
let tareas = [];

//Inicializamos la función
function agregarTarea(){
    const tareaInput = document.getElementById("tarea");

    //creamos una variable que almacenará el valor del elemento
    const tareaTexto = tareaInput.value;

    //Verificamos de que si el valor de tareaTexto no es un dato vacío
    if(tareaTexto !== ""){
        //agregamos los elementos a la lista
        tareas.push(tareaTexto);

        //Estableceremos el valor del input para borrar el contenido del campo de entrada
        tareaInput.value = "";

        //Función que nos permite actualizar la lista cada vez que se ingrese uno nuevo
        mostrarListatareas();
    }
}

function mostrarListatareas() {
    //Declaramos una variable que haga referencia al elemento que almacene la lista
    const listaTareas = document.getElementById("lista-tareas");

    //se borrará el contenido html del elemento listaTareas, dejándolo vacío
    listaTareas.innerHTML="";

    //inicializamos un bucle
    for(let i=0; i<tareas.length; i++){

        //variable que almacena el valor del elemento actual
        const tarea = tareas[i];

        //Creamos un nuevo elemento HTML
        const li = document.createElement("li");

        //Queremos gualdar el contenido tarea en la etiqueta creada
        li.textContent = tarea;

        //Guardaremos la lista de las tareas de manera continua
        listaTareas.appendChild(li);
    }
}