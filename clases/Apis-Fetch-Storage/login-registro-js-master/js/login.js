//Inicializamos una variable que recibirá los datos del formulario
const loginForm = document.querySelector('#loginForm');

//Inicializamos la función que nos permitirá loguearse
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    const users = JSON.parse(localStorage.getItem('users')) || [];

    //find recorre arreglos u objetos -> me devuelve un objeto o un undefined
    const validUser = users.find(user => user.email === email && user.password === password);

    if(!validUser){
        return alert ('Usuario y/o contraseña son incorrectos o no existen');
    }

    //pero si los datos son correctos, nos mostrará una alerta de bienvenida
    alert(`Bienvenido ${validUser.name}`);

    //Aquí almacenamos los datos string para guardarlos en el local storage
    localStorage.setItem('isLogin', JSON.stringify(validUser));
    //
    window.location.href = 'index.html';

});