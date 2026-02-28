import * as readline from "readline-sync";

console.log("Hola mundo");

// Variables y tipos de datos
let edad: number = 20; // <- Dato numerico
let nombre: string = "Victor"; // <- Dato de texto
let activo: boolean = true; // <- Dato booleano

console.log(`Tu edad es: ${edad}`);
console.log("Tu nombre es: " + nombre);
console.log(activo);

// Constantes
const PI: number = 3.1416;

//Entada de datos
const nombre2: string = readline.question("Ingrese su nombre: "); //<- Entrada de datos de texto
console.log(`Hola ${nombre2}`);

const edad2: number = readline.questionInt("Ingrese su edad: "); // <- Entrada de datos numéricos
console.log(`Tu edad es: ${edad2}`);

//Operadores aritméticos
const numero1: number = readline.questionInt("Ingrese el primer numero: ");
const numero2: number = readline.questionInt("Ingrese el segundo numero: ");

console.log(`La suma de ${numero1} + ${numero2} es: ${numero1 + numero2}`);
console.log(`La resta de ${numero1} - ${numero2} es: ${numero1 - numero2}`);
console.log(`La multiplicacion de ${numero1} x ${numero2} es: ${numero1 * numero2}`);
console.log(`La division de ${numero1} / ${numero2} es: ${numero1 / numero2}`);
console.log(`El residuo de ${numero1} / ${numero2} es: ${numero1 % numero2}`);
console.log(`La potencia de ${numero1} ^ ${numero2} es: ${numero1 ** numero2}`);