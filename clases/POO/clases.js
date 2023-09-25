//CLASES Y SUBCLASES PARA HERENCIA

//Clase o superclase
class Deportista { //las clases van con la primera en mayúscula
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
}

let deportista1 = new Deportista ('Nairo', 'Quintana'); //creo una instancia de las clases

//subclases
class Futbolista extends Deportista {
    constructor(nombre, apellido, goles) {
        super(nombre,apellido);//palabra clave que indica qué atributos va a traer
        this.goles = goles;
    }
}

let nuevoDeportista = new Futbolista ('James', 'Rodriguez', 10);