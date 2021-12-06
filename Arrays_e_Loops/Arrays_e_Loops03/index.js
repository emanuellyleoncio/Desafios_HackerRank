
let resultados = ["V","E","V","E"]

let pontuacao = 0;
    
for (let index of resultados) {
    if (index === "V") {
        pontuacao = pontuacao + 3;
    } else if (index === "E") {
        pontuacao = pontuacao + 1;
    } else if (index === "D") {
        pontuacao = pontuacao + 0;
    }
}
console.log(pontuacao);