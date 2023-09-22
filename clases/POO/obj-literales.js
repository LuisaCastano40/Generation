//Creo un obj con sus atributos y métodos
let perro1 = {
    nombre: "Lucy",
    color: "Blanco",
    edad:4,
    ladrar(){// Creo un método
        console.log('Guau');
    },
    saludar() {
        console.log("Hola me llamo " + this.nombre)
    }
}
let perro2 = {
    nombre: "Tobi",
    color: "Negro",
    edad:7,
    ladrar(){// Creo un método
        console.log('Guau');
    },
    saludar() {
        console.log("Hola me llamo " + this.nombre)
    }
}

function cambiarEdad(){
    perro1.edad ++;
}


//Formas de acceder a un objeto
perro1.colorOjos = "blue";
perro1["colormanchas"] = "negro";