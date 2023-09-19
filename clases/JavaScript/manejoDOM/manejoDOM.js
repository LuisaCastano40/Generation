function cambiarTitulo(){

    //inicializamos la variable
    var texto = document.createTextNode("Este es un texto de ejemplo.");
    let tituloElement = document.getElementById('titulo');
    //tituloElement.textContent = 'hello world';
    tituloElement.appendChild(texto);
}