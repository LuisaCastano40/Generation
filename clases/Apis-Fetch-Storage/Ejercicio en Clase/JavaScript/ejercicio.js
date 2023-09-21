
const frases = document.getElementById('frasesGatos');
const images = document.getElementById('imagesGatos');


fetch('https://catfact.ninja/fact')
.then(response => response.json())
.then(data => mostrarFrase(data))
.catch(error => console.log(error));

function mostrarFrase(data){
    let frase = data.fact;
    console.log(frase);
    frases.textContent = frase;
}

fetch('https://api.thecatapi.com/v1/images/search?limit=10')
.then(response => response.json())
.then(data => mostrarImagen(data))
.catch(error => console.log(error));

const mostrarImagen = data =>{
    let info = data;
    console.log(info)

    info.forEach(data => {
        images.innerHTML += `<img src="${data.url}" alt="">`
    });

}