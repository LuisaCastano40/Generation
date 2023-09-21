//Inicializamos una variable que recibirá los datos del formulario de registro
const signupForm = document.querySelector('#signupForm');

//Escuchamos el evento submit del formulario (cuando se envíen los datos)
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();//evita recargo de la página
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;

    //Inicializamos una variable que recibirá los datos de los usuarios registrados, si no hay datos se creará un arreglo vacío
    const users = JSON.parse(localStorage.getItem('users')) || [];

    //Inicializamos una variable que buscará si el email que ingresamos es exactamente igual al que registramos
    //dato booleano
    const isUserRegistered = users.find(user => user.email === email);

    if(isUserRegistered){
        return alert('El usuario ya está registrado!');
    }

    //Nos agrega los datos a la lista
    users.push({name:name, email:email, password: password});

    //Aquí especificamos que nos permita guardar los datos en formato string en el storage para podernos loguear después
    localStorage.setItem('users', JSON.stringify(users));

    //Registro exitoso
    alert('Registro Exitoso!');

    //si registro exitoso, nos redirigirá al loging
    window.location.href = 'login.html'

});