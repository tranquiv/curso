

for (let i = 0; i < 5; i++){
    console.log("Iteración número: " + i);
}

console.log("-----------------------------------");

let j = 0;
while (j < 5){
    console.log("Iteración con while: " + j);
    j++;
}


console.log("-----------------------------------");

let edad = 18;
if (edad>=18){
    console.log("Eres mayor de edad");
} else {
    console.log("Eres menor de edad");
}

console.log("-----------------------------------");

//Operador ternario
let mensaje = edad >= 18 ? "Mayor de edad" : "Menor de edad";
console.log(mensaje);

console.log("-----------------------------------");


let numeros = [1, 2, 3, 4];
numeros.push(5);
console.log(numeros);


//Ejemplo de objetos:

let persona ={
    nombre: "Juan",
    edad: 30,
    ciudad: "Villarrica"
};
console.log("Hola soy", persona.nombre);


//Funciones de orden superior

//Uso de map:
let numerosmap = [1, 2, 3, 4, 5];
let num = numerosmap.filter(num=> num * num);
console.log(num);


//Uso de filter:
let numerosfilter = [1, 2, 3, 4, 5];
let pares = numerosfilter.filter(num=> num % 2 ===0);
console.log(pares);


//Uso de reduce
let numerosreduce = [1, 2, 3, 4, 5];
let suma = numerosreduce.reduce(acum, num);
console.log(suma);

