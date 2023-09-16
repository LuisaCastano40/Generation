//Para organizar mejor el código separé las acciones en diferentes funciones

//Esta función me trae todos los inputs y sus valores ingresados en HTML
function getInputs() {

//querySelectorAll -> Me trae TODOS los elementos de un mismo tipo, en este caso, inputs tipo texto
const inputsMateria = document.querySelectorAll('input[type="text"]');
//querySelectorAll -> Me trae TODOS los elementos de un mismo tipo, en este caso, inputs tipo número
const inputsNota = document.querySelectorAll('input[type="number"]');
//Me trae el elemnto formulario de mi HTML
const form = document.getElementById('formulario');
//Inicializamos el arreglo que me contendrá un objeto con la materia y su nota
const notas = [];

    //Ciclo para recorrer inputsMateria que se comporta como arreglo
    for (let i = 0; i < inputsMateria.length; i++) {

        //traigo los valores ingresados de cada input tipo texto y lo guardo en materia 
        const materia = inputsMateria[i].value;
        //traigo los valores ingresados de cada input tipo numero y lo guardo en nota
        const nota = inputsNota[i].value;
        
        //Si la nota son mayores o iguales a cero Y la nota es menor o igual a 10, hágame lo de adentro
        if(nota>=0 && nota<=10){
            //si los inputs de materia y nota diferentes a vacío, creeme un objeto que contenga el atributo materia, y el atributo nota
            if(materia !== '' && nota != ''){
                const objeto = {
                  materia: materia,
                  nota: nota
                };
                //Además, agrégeme ese objeto al arreglo notas
                notas.push(objeto);
            }
        } else{
          //Si la condición anterior no se cumple, muestreme un mensaje
            alert('ingrese notas válidas');
            //reset() -> propiedad de los formularios, para eliminar el contenido de todos los elementos que contenga
            form.reset();
        }
      }
    
    //Cuando se llame la función, me retorna el arreglo notas con los objetos agregados
    return notas;
  }
  

  //Función para mostrar en una lista los objetos almacenados (materia:nota)
  function mostrarNotas() {
    //Creo una nueva variable notas, y llamo la función getInputs que me retorna el arreglo modificado
    const notas = getInputs();

    //Traemos el elemento lista creado en HTML
    const listaNotas = document.getElementById('lista-notas');
    //Lo reseteamos para que no se duplique el contenido
    listaNotas.innerHTML = '';

    //condicional para verificar que los inputs no están vacíos cuando se da click en el botón mostrar lista
    if(notas.length === 0){
      //Si están vacíos, me muestra un mensaje en pantalla
      alert('Ingrese datos válidos o complete todos los campos')
    }else{
      //si se ingresó los datos correctamente, créeme la lista de materias:notas
      notas.forEach((nota) => {
        const li = document.createElement('li');
        li.textContent = `${nota.materia}: ${nota.nota}`;
        listaNotas.appendChild(li);
      });
    }
  }
  
  //Creamos la función que me calcula el promedio de las notas
  function calcularPromedio() {
    //Creo una nueva variable notas, y llamo la función getInputs que me retorna el arreglo modificado
    const notas = getInputs();
    //me trae el elemento del HTML donde quiero mostrar el resultado del promedio
    const promedioElement = document.getElementById('resultado');
    //Me trae el elemnto formulario de mi HTML
    const form = document.getElementById('formulario');
    
    //calculamos el promedio de las notas. primero con la sumatoria usando el método reduce y luego dividiendo entre la cantidad de notas totales
    const promedio = notas.reduce((total, nota) => total + parseFloat(nota.nota), 0) / notas.length;

    //condicional para verificar que los inputs no están vacíos cuando se da click en el botón mostrar lista
    if(notas.length === 0){
      alert('Ingrese datos válidos o complete todos los campos')
    }else{
      //si se ingresó los datos correctamente, muéstreme en el HTML el resultado de ese promedio con dos decimales
      promedioElement.textContent = `Promedio: ${promedio.toFixed(2)}`;
      //reset() -> propiedad de los formularios, para eliminar el contenido de todos los elementos que contenga
      form.reset();
    }
  }
  
  //Función para eliminar el contenido de los formularios, la lista y el promedio
  function reset() {

    //querySelectorAll -> Me trae TODOS los elementos de un mismo tipo, en este caso, todos los inputs
    const inputs = document.querySelectorAll('.contenedor-materia input');
    //Traemos el elemento lista creado en HTML
    const listaNotas = document.getElementById('lista-notas');
    //me trae el elemento del HTML donde quiero mostrar el resultado del promedio
    const promedioElement = document.getElementById('resultado');
    
    //Inputs se comporta como arreglo, entonces le decimos que para cada input guardado en la variable inputs, me muestre vacío su valor (reseteamos todos los inputs)
    inputs.forEach((input) => {
      input.value = '';
    });
  
    //reset de la lista
    listaNotas.innerHTML = '';
    //reset del resultado del promedio
    promedioElement.textContent = '';
  }
  
  