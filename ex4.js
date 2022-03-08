// Implementa una función que nos diga que array tiene más elementos
// Si el array 'elementos1' tiene más elementos que el array 'elementos2'; la función debe devolver un 1. En caso contrario, devuelve un 2.
// Si tienen el mismo tamaño. debe devolver un 0.

function arrayMayor(elementos1, elementos2) {
let primero
let segundos

primero = elementos1.length
segundo = elementos2.length

if(primero == segundo){
    console.log(0)
}if(primero > segundo){
    console.log(1)
}if(primero < segundo){
    console.log(2)
}

}

console.log(arrayMayor([1, 2], [4, 5])); // 0
console.log(arrayMayor([1, 2, 5], [4, 5])); // 1
console.log(arrayMayor([1, 2, 5], [4, 5, 8, 10])); // 2
console.log(primero, segundo)


