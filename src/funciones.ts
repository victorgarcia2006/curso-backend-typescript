//Funciones

//Funcion con parametros y una salida
function suma(a: number, b: number): number{
    return a + b;
}

//Funcion con parametros y sin salida
function printSuma(a: number, b: number): void {
    console.log(a + b);
}

//Funcion sin parametros y sin salida
function sayHello(): void {
    console.log("Hello");
}

//Funcion con parametros opcionales
function resta(a: number, b: number, c?: number): number{
    return a - b - (c || 0);
} 

console.log(suma(2, 3));
printSuma(3, 4);
sayHello();
console.log(resta(5, 3, 2));

//Funcion flecha
const multiplicacion = (a: number, b: number): number => a * b;
console.log(multiplicacion(2, 3));
