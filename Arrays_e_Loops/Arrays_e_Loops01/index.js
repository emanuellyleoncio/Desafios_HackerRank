let letra = "m";
let palavras = [ "mamao", "maca", "melao", "melancia", "laranja"];

let contador = 0;
    
for (let index of palavras) {
    const primeiraLetra = index[0];
    
    if (primeiraLetra !== letra) {
        contador++
    }
}
console.log(contador);