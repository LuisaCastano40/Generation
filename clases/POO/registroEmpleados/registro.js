//Lista vacía que almacena datos de los empleados

let empleados = [];

//función constructora
function Empleado (id, nombre, apellido, nacimiento, cargo){
    this.id = id;
    this.nombre = nombre;
    this.apellido = apellido;
    this.nacimiento = nacimiento;
    this.cargo = cargo;
}

//Función agregar empleado

function agregarEmpleado(){
    let id = document.getElementById('textoID').value;
    let nombre = document.getElementById('nombre').value;
    let apellido = document.getElementById('apellido').value;
    let nacimiento = document.getElementById('nacimiento').value;
    let cargo = document.getElementById('cargo').value;
    
    //creamos la instancia
    let nuevoEmpleado = new Empleado (id, nombre, apellido, nacimiento, cargo);

    empleados.push(nuevoEmpleado);
    alert('Se agregó exitosamente el nuevo empleado');

    limpiarCampos();
}

//Mostramos los datos
// function mostrarEmpleado(){

//     //let listado = '';//me acumula la información de empleados
//     let lista = document.getElementById('lista');

//     for(empleado of empleados){
//         let li = document.createElement('li');
//         li.innerText = `${empleado.id} - ${empleado.nombre} - ${empleado.apellido} - ${empleado.nacimiento} - ${empleado.cargo}`
//         lista.appendChild(li);
//     }

// }

function mostrarEmpleado(){
    let listado = "";
    for(empleado of empleados){
        for(let prop in empleado){
            listado = listado + prop.toUpperCase() + ': ' + empleado[prop] + '\n'
        }
        listado = listado + "\n";
    }
    alert(listado);
}

function limpiarCampos(){
    document.getElementById('textoID').value = '';
    document.getElementById('nombre').value = '';
    document.getElementById('apellido').value = '';
    document.getElementById('nacimiento').value = '';
    document.getElementById('cargo').value = '';
}