//Inicializamos una variable que me permitirá capturar los datos del local Storage con la clave 'isLogin', si no hay datos pondiría inicializa en false (pone el uno o el otro).
const user = JSON.parse(localStorage.getItem('isLogin')) || false;

//
if(!user){
    window.location.href = 'login.html'
}

//Inicializamos una variable que nos permitirá salir del sistema, cuando le demos al botón de 'cerrar sesión'
const logout = document.querySelector('#logout');

//Inicializamos un evento 'click' para cerrar sesión
logout.addEventListener('click', ()=>{
    //Aparecerá un msj de alerta diciendo que se finalizó la sesión
    alert('Hasta pronto!');

    //remueve la información que hay en el localStorage
    localStorage.removeItem('isLogin');
    window.location.href = 'login.html'
});