//Inicializar una variable que estará recibiendo la API
let url = 'https://jsonplaceholder.typicode.com/users';

//Ingresar una instrucción que me permite acceder y manipular las peticiones http

fetch(url)
//las promesas se encargan de hacer una petición, para eso, necesitan una respuesta
//response -> puede tomar otros valores (res, respuesta, etc)
.then(response => response.json())
//data es la información recolectada a partir de la petición - puede tomar otros valores (res, respuesta, etc)
.then(data => mostrarData(data))
//Si al momento de llamar los datos, son incorrectos, entonces que me lance un msj de error
.catch(error => console.log(error));



//Inicializar función
const mostrarData = (data) => {
    console.table(data);

    let body = '';

    for(let i = 0; i<data.length; i++){
        //+= se encarga de agregar elementos
        body += `
        <tr>
            <td>${data[i].id}</td>
            <td>${data[i].name}</td>
            <td>${data[i].email}</td>
        </tr>  `
    }
    //
    document.getElementById("data").innerHTML = body;


}