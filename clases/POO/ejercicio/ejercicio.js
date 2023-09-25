const personas = [];

function Persona(nombre, edad) {
  this.nombre = nombre;
  this.edad = edad;
  //también puedo usar directamente saludar(), y también seentiende como función
  this.saludar = function () {
    console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años`);
  };
}

function mostrarPersonas() {
  let persona1 = new Persona('luisa', '23');
  personas.push(persona1);
  let persona2 = new Persona('sara', '21');
  personas.push(persona2);
  let persona3 = new Persona('camila', '25');
  personas.push(persona3);

  for (let i = 0; i < personas.length; i++) {
    personas[i].saludar();
  }
}

mostrarPersonas();
