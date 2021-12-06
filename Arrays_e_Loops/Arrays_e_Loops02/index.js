let notas = [100, 100, 100, 20, 50, 30, 14, 100, 100, 100];

let menorNota = notas[0];
let maiorNota = notas[0];
    
let soma = 0;
for (let item of notas) {
    soma = soma + item;
}
    
for (let index = 1; index < notas.length; index++) {
    if (notas[index] > maiorNota) {
        maiorNota = notas[index];
    } else if (notas[index] < menorNota) {
        menorNota = notas[index];
    }
}
    
let media = (soma - menorNota - maiorNota) / (notas.length - 2);
    
console.log(media);