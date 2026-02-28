import * as readline from "readline-sync";

//Arreglos
/* let notas: number[] = [1, 2, 3, 4, 5];
console.log(notas);

//Agregar elementos a un arreglo
notas.push(6);
console.log(notas);

//Eliminar elementos de un arreglo
notas.pop();
console.log(notas);

//Eliminar un elemento en una posicion especifica
notas.splice(2, 1);
console.log(notas);

//Longitud de un arreglo
console.log(notas.length);

let nombres: string[] = ["Juan", "Maria", "Pedro", "Luis", "Ana"];

//Recorrer un arreglo: Ciclo For
for(let i = 0; i < nombres.length; i++){
    console.log(`${i + 1}. ${nombres[i]}`);
}

// For Each
nombres.forEach(
    (nombre, index) => {
    console.log(`${index + 1}. ${nombre}`);
    }
) */

/*
Ejercicio 1: Realizar un programa que dadas las calificaciones algunos alumnos,
calcule el media y la mediana.
*/

let calificaciones: number[] = [85.5, 92.0, 78.5, 92.0, 85.5, 92.0, 55.6];

//Calcular la media
let suma: number = 0;
//Con foreach
calificaciones.forEach(
    (calificacion) => {
        suma += calificacion;
    }
)

let media: number = suma / calificaciones.length;

//Calcular la mediana
//Ordenar el arreglo
const calificacionesOrdenadas: number[] = [...calificaciones].sort((a, b) => a - b);
const mitad: number = Math.round(calificacionesOrdenadas.length / 2);
let mediana = calificacionesOrdenadas[mitad];

console.log(`Promedio: ${media}`);
console.log(`Mediana: ${mediana}`);