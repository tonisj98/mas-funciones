// Implementa una función que recorre toda la 'palabra', y cuenta todas las letras 'letra' que contiene. Debe devolver el número de veces que aparece 'letra' en 'palabra'

function contarLetras(palabra, letra) {
let numVeces = 0;


for (index = 0; index < palabra.length; index++) {
 
    if(palabra[index] == letra){
numVeces++
}

}return numVeces

}

console.log(contarLetras("pato", "p" )); // 1
console.log(contarLetras("pato", "k")); // 0
console.log(contarLetras("perreque", "r")); // 2

