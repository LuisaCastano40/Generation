//Inicializamos unos arreglos para almacenar los productos por tipos
let accesorios=[];
let computadores=[];
let eBooks=[];

//Creamos nuestra función constructora para suestra superclase Producto, a partir de esta las subclases van a heredar
class Producto{
    constructor(nombre, precio, stock){
        //atributos
        this.nombre=nombre;
        this.precio=precio;
        this.stock=stock;
    }
    //método mostrar producto
    mostrarProducto(){
        return `${this.nombre} ${this.precio} ${this.stock}`;
    }
}


//Creamos una SUB-CLASE Computadores a partir de suentra SUPER-CLASE Producto
class Computadores extends Producto{
    //como estamos usando class y no una función constructora, necesitamos usar el constructor
    constructor(nombre, precio, stock, marca){
        super(nombre, precio, stock);
        this.marca=marca;
    }
    //Estamos modificando el método heredado (verificar funcionamiento con la profe)
    mostrarProducto(){
        return`${super.mostrarProducto()}, marca: ${this.marca}`
    }
}

//Creamos una SUB-CLASE Ebooks a partir de suentra SUPER-CLASE Producto
class Ebooks extends Producto{
    //como estamos usando class y no una función constructora, necesitamos usar el constructor
    constructor(nombre, precio, stock, autor){
        super(nombre, precio, stock);
        this.autor=autor;
    }
    //Estamos modificando el método heredado (verificar funcionamiento con la profe)
    mostrarProducto(){
        return`${super.mostrarProducto()}, autor: ${this.autor}`
    }
}


//Creamos nuestras instancias u "objetos" a partir de nuestra clase Producto y subclases Computadores Y Ebooks
let accesorio1= new Producto ("Audífonos", 500000, 10);
let accesorio2= new Producto ("Mouse", 50000, 30);
let computador1= new Computadores ("Katana", 2000000, 25, "MSI");
let computador2= new Computadores ("Pavilion", 1500000, 14, "HP");
let eBook1= new Ebooks ("Días sin ti", 45000, 17, "Elvira Sastre");
let eBook2= new Ebooks ("Inferno", 55000, 9, "Dan Brown");

//Llamamos el método mostrarProducto heredado para que se nos muestre en consola los productos

console.log(accesorio1.mostrarProducto());
console.log(accesorio2.mostrarProducto());
console.log(computador1.mostrarProducto());
console.log(computador2.mostrarProducto());
console.log(eBook1.mostrarProducto());
console.log(eBook2.mostrarProducto());


//Guardamos las instancias creadas en cada uno de los arreglos inicializados antes, según el tipo de producto
accesorios.push(accesorio1, accesorio2);
computadores.push(computador1, computador2);
eBooks.push(eBook1, eBook2);


//Inicializacon la función para mostrar en una lista todos los productos computadores
function mostrarComputadores(){
    //Traemos el elemento lista de nuestro HTML
    const listaComputadores=document.getElementById("listaComputadores");

    //recorremos nuestro arreglo computadores, y creamos un <li> por cada elemento que haya en el arreglo, además de pedir que se muestren los datos
    for(let i=0; i<computadores.length; i++){
        listaComputadores.innerHTML+=`<li>nombre: ${computadores[i].nombre} - precio: ${computadores[i].precio} - stock: ${computadores[i].stock} - marca: ${computadores[i].marca}</li> `;
    }
}

//Inicializacon la función para mostrar en una lista todos los productos accesorios
function mostrarAccesorios(){
     //Traemos el elemento lista de nuestro HTML
    const listaAccesorios=document.getElementById("listaAccesorios");

    //recorremos nuestro arreglo accesorios, y creamos un <li> por cada elemento que haya en el arreglo, además de pedir que se muestren los datos
    for(let i=0; i<accesorios.length; i++){
        listaAccesorios.innerHTML+=`<li>nombre: ${accesorios[i].nombre} - precio: ${accesorios[i].precio} - stock: ${accesorios[i].stock}</li> `;
    }
}

//Inicializacon la función para mostrar en una lista todos los productos ebook
function mostrarEbooks(){
    //Traemos el elemento lista de nuestro HTML
    const listaEbooks=document.getElementById("listaEbooks");

    //recorremos nuestro arreglo ebooks, y creamos un <li> por cada elemento que haya en el arreglo, además de pedir que se muestren los datos
    for(let i=0; i<eBooks.length; i++){
        listaEbooks.innerHTML+=`<li>nombre: ${eBooks[i].nombre} - precio: ${eBooks[i].precio} - stock: ${eBooks[i].stock} - autor: ${eBooks[i].autor}</li> `;
    }
}