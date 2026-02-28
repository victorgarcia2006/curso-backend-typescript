import * as readline from "readline-sync";

//Ciclos

//For
//Hacer un programa que calcule el factorial de un numero
/* const numero: number = readline.questionInt("Ingrese el numero del que quiere calcular el factorial: ");
let factorial: number = 1;

for(let i = 1; i <= numero; i++){
    //factorial = factorial * i;
    factorial *= i;
}

console.log(`El factorial de ${numero} es ${factorial}`); */

//While
const number: number = 0;
while (number != 0) {
  console.log("Entre al while");
}

//Do while
do {
  console.log("Entre al do while");
} while (number != 0);

// Menu mejorado

// Hacer un programa que haga varias conversiones de temperatura

let opcion: number = 0;

do {
  console.log("Seleccione una conversion de temperatura: ");
  console.log("1. Celsius a Fahrenheit");
  console.log("2. Celsius a Kelvin");
  console.log("3. Fahrenheit a Celsius");
  console.log("4. Fahrenheit a Kelvin");
  console.log("5. Kelvin a Celsius");
  console.log("6. Kelvin a Fahrenheit");
  console.log("7. Salir");

  opcion = readline.questionInt("R: ");

  const grados: number = readline.questionFloat("Ingrese la temperatura: ");

  let resultado: number = 0;

  switch (opcion) {
    case 1:
      resultado = (grados * 9) / 5 + 32;
      console.log(`${grados}°C = ${resultado}°F`);
      break;
    case 2:
      resultado = grados + 273.15;
      console.log(`${grados}°C = ${resultado}K`);
      break;
    case 3:
      resultado = ((grados - 32) * 5) / 9;
      console.log(`${grados}°F = ${resultado}°C`);
      break;
    case 4:
      resultado = ((grados + 459.67) * 5) / 9;
      console.log(`${grados}°F = ${resultado}K`);
      break;
    case 5:
      resultado = grados - 273.15;
      console.log(`${grados}K = ${resultado}°C`);
      break;
    case 6:
      resultado = ((grados - 459.67) * 9) / 5;
      console.log(`${grados}K = ${resultado}°F`);
      break;
    case 7:
      console.log("Gracias por usar el programa");
      break;
    default:
      console.log("Opcion invalida");
      break;
  }
} while (opcion != 7);

// Ejercicio: Mejorar el menu del ejercicio del calculo de areas
