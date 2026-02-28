import * as readline from "readline-sync"

//Condicionales
//Hacer un programa que pida al usuario su edad y muestre si es mayor de edad o no
const edad: number = readline.questionInt("Ingrese su edad: ");

if (edad >= 18) {
    console.log("Es mayor de edad");
} else {
    console.log("Es menor de edad");
}

//Alt + shift + A

//Condicionales else if
const numero: number = readline.questionInt("Ingrese un numero: ");

if (numero > 0){
    console.log("El numero es positivo");
} else if (numero < 0){
    console.log("El numero es negativo");
} else {
    console.log("El numero es cero");
}

/* Ejercicio: Pedir una calificacion al usuario y mostrar un mensaje segun la calificacion:
    Excelente = 90-100
    Bien = 80-89
    Regular = 70-79
    Suficiente = 60-69
    Reprobado = 0-59
*/

//Sentencia switch-case
// Hacer un programa que haga varias conversiones de temperatura
console.log("Seleccione una conversion de temperatura: ");
console.log("1. Celsius a Fahrenheit");
console.log("2. Celsius a Kelvin");
console.log("3. Fahrenheit a Celsius");
console.log("4. Fahrenheit a Kelvin");
console.log("5. Kelvin a Celsius");
console.log("6. Kelvin a Fahrenheit");

const opcion: number = readline.questionInt("R: ");

const grados: number = readline.questionFloat("Ingrese la temperatura: ");

let resultado: number = 0;

switch(opcion){
    case 1:
        resultado = grados * 9/5 + 32;
        console.log(`${grados}°C = ${resultado}°F`);
        break;
    case 2: 
        resultado = grados + 273.15;
        console.log(`${grados}°C = ${resultado}K`);
        break;
    case 3:
        resultado = (grados - 32) * 5/9;
        console.log(`${grados}°F = ${resultado}°C`);
        break;
    case 4:
        resultado = (grados + 459.67) * 5/9;
        console.log(`${grados}°F = ${resultado}K`);
        break;
    case 5:
        resultado = grados - 273.15;
        console.log(`${grados}K = ${resultado}°C`);
        break;
    case 6:
        resultado = (grados - 459.67) * 9/5;
        console.log(`${grados}K = ${resultado}°F`);
        break;
    default:
        console.log("Opcion invalida");
        break;
}

/*Ejercicio: Hacer un programa en el que el usuario pueda calcular el area 
de un cuadrado, rectangulo, triangulo y circulo, con un menú*/