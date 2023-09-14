// Creamos una variable que recibirá la operación que se seleccione
function calculadora () {

    const num1 = parseInt(prompt('Ingrese el primer número'));
    const num2 = parseInt(prompt('Ingrese el segundo número'));
    const operacion = prompt('Ingrese la operación que quiere realizar (+ , - , * , /)');

    //Nos permite ejecutar los diferentes casos
    switch(operacion)
    {
        case '+':
            console.log(`La suma es: ${num1} + ${num2} = ${num1+num2}`);
            break;
        case '-':
            console.log(`La resta es: ${num1} - ${num2} = ${num1-num2}`);
            break;
        case '*':
            console.log(`La multiplicación es: ${num1} * ${num2} = ${num1*num2}`);
            break;
        case '/':
            console.log(`La división es: ${num1} / ${num2} = ${num1/num2}`);
            break;
        default:
            console.log('La operación que ingresas es inválida');
    }
};


//Invocación de la función
calculadora();