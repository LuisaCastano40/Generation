//Función constructora
function Libro (autor, titulo, cantPaginas){
    this.autor = autor;
    this.titulo = titulo;
    this.cantPaginas = cantPaginas;
}

let nuevoLibro = new Libro ('stephen King', 'it', 500); //Creo una instancia de la función constructora 


//Prototype sirve para añadir métodos nuevos al constructor
//primero nombre, luego le decimos qué va a hacer
Libro.prototype.abrirLibro = function(){
    console.log(this.titulo + 'ha sido abierto..'); //accedemos al título del libro con el .this
}


//llamo la instancia y luego la función añadida
//nuevoLibro.abrirLibro()


//Por buenas prácticas, añadimos atributos en constructor y laos métodos con prototype