//Crear función constructora
function Auto (marca, modelo, color, anio, propiedatio){
    this.marca = marca;
    this.modelo = modelo;
    this.color = color;
    this.anio = anio;
    this.propiedatio = propiedatio;
}

//Creo una instancia de este nuevo constructor
let auto1 = new Auto('Ford','Fiesta','azul', 2015, 'Natalia');
let auto2 = new Auto('Chevrolet','Camaro', 'rojo', 2020, 'Juan');
let auto3 = new Auto('Toyota','Corolla','verde', 2021, 'Luisa');

//Creamos una variable que almacene las instancias que ya creé
let autos = [auto1, auto2, auto3];

//Crear los métodos
Auto.prototype.encender = function(){
    console.log('El automovil se encendió ....');
}

//El this me hace referencia que me acceda a un dato en específico dentro del constructor
Auto.prototype.verAuto = function(){
   return `${this.marca} - ${this.modelo} - ${this.anio} - ${this.propiedatio}`;
}

//Función que se activa al dar click en el boton
function mostrarAutos(){
    let lista = document.getElementById('listAuto');

    for(let auto of autos){
       let item = document.createElement('li');
       item.innerText = auto.verAuto();
       lista.appendChild(item);
    }
}