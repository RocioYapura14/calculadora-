const process = require ("process")

const sumar = require ("./sumar")
const restar = require ("./restar")
const multiplicacion = require ("./multiplicacion")
const division = require ("./division")
const raizCuadrada = require ("./raizCuadrada")
const raizCubica = require("./raizCubica")
const potencia = require ("./potencia")

let numberA = +process.argv[2]
let numberB = +process.argv[3]

console.log(("El resultado de la suma entre " + numberA +" y " + numberB + " es"), sumar (numberA,numberB));
console.log(("El resultado de la resta entre " + numberA +" y " + numberB + " es"), restar (numberA,numberB));
console.log(("El resultado de la multiplicacion de " + numberA +" por " + numberB + " es"), multiplicacion (numberA,numberB));
console.log(("El resultado de la division de " + numberA +" entre " + numberB + " es"), division (numberA,numberB));
console.log(("El resultado de la raiz cuadradada de " + numberA + " es"), raizCuadrada (numberA));
console.log(("El resultado de la raiz cubica de " + numberA + " es"), raizCubica (numberA));
console.log(("El resultado de " + numberA +" elevado " + numberB + " es"), potencia (numberA,numberB));
