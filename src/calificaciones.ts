import * as readline from "readline-sync";

function calcularMedia(calificaciones: number[]): number {
    let suma: number = 0;
    calificaciones.forEach((calificacion) => {
        suma += calificacion
    })
    return suma / calificaciones.length;
}

function calcularMediana(calificaciones: number[]): number {
    const calOrdenadas: number[] = [...calificaciones].sort((a, b) => a - b);

    const mitad: number = Math.floor(calOrdenadas.length / 2);

    if(calOrdenadas.length % 2 === 0){
        return (calOrdenadas[mitad - 1] + calOrdenadas[mitad]) / 2;
    } else {
        return calOrdenadas[mitad];
    }
}

function calcularModa(calificaciones: number[]): number {
    const frecuencia: { [calificacion: number] : number } = {};

    let maxFrecuencia: number = 0;
    let moda: number = 0;

    for(let i = 0; i < calificaciones.length; i++){
        const calificacion = calificaciones[i];

        frecuencia[calificacion] = (frecuencia[calificacion] || 0) + 1;

        if(frecuencia[calificacion] > maxFrecuencia){
            maxFrecuencia = frecuencia[calificacion];
            moda = calificacion;
        }
    }

    return moda;
}

const entrada = readline.question("Ingrese las calificaciones separadas por comas o espacios: ");

const calificaciones = entrada
    .split(/[,\s]+/) //Divide la entrada en calificaciones
    .map((calificacion) => parseFloat(calificacion)) //Convierte las calificaciones a numeros
    .filter((calificacion) => !isNaN(calificacion)); //Filtra las calificaciones que no son numeros

const media = calcularMedia(calificaciones);
const mediana = calcularMediana(calificaciones);
const moda = calcularModa(calificaciones);

console.log("Resultados: ");
console.log(`Media: ${media.toFixed(2)}`);
console.log(`Mediana: ${mediana}`);
console.log(`Moda: ${moda}`);

