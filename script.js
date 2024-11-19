//para rodar em terminal
//const input = require("readline-sync");
//roda com o node, sem ele não da

//pega a palavra desejada e coloca em letra MAIÚSCULA
let palavra = prompt("Palavra desejada: ").toUpperCase();
//Variável quye vai guardar  palavra invertida
let contrario = "";
//fala se é ou não palindromo
let palindro = "";

//guarda as letras da "palavra" e coloca ao contrário na varoável "contrário"
for(let i = palavra.length - 1; i >= 0; i--){
    contrario += palavra[i];
}

//compara se são iguais e fala se é ou não
palindro = (palavra === contrario) ? "Sim" : "Não";

console.log("Palavra Invertida: " + contrario);
console.log("É Palindromo: " + palindro);