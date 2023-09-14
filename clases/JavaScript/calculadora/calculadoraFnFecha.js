
// Creamos una variable que recibirá la operación que se seleccione
const calculadora = () => {

    const num1 = parseInt(prompt('Ingrese el primer número'));
    const num2 = parseInt(prompt('Ingrese el segundo número'));
    const operacion = prompt('Ingrese la operación que quiere realizar (+ , - , * , /)');

    //Nos permite ejecutar los diferentes casos
    switch(operacion)
    {
        case '+':
            console.log(`la suma es: ${num1} + ${num2} = ${num1+num2}`);
            break;
        case '-':
            console.log(`la resta es: ${num1} - ${num2} = ${num1-num2}`);
            break;
        case '*':
            console.log(`la multiplicación es: ${num1} * ${num2} = ${num1*num2}`);
            break;
        case '/':
            console.log(`la división es: ${num1} / ${num2} = ${num1/num2}`);
            break;
        default:
            console.log('operación que ingresas es inválida');
    }
};


//Invocación de la función
calculadora();