// Avançando em JavaScript

// Manipulação de arrays

const frutas = ["Maçã", "Laranja"]

frutas.unshift("Acerola");
frutas.push("Manga");

console.log(frutas);

frutas.shift();
console.log(frutas);

// map, filter, reduce -> arrow function

const numeros = [1, 2, 3, 4, 5, 6]

// find só retorna o primeiro elemento do critério
const numeroPar = numeros.find((num) => num % 2 === 0);
console.log(numeroPar)

// filter retorna todos os elementos que batem com o critério
const numerosPares = numeros.filter((num) => num % 2 === 0)

console.log(numerosPares)

// Manipulação de strings

const frase = " Olá, mundo!   ";
const palavras = frase.trim();

console.log(palavras);

const frase2 = "JavaScript é incrível!";

console.log(frase2.startsWith("Java"));
// Verifica a primeira palavra

console.log(frase.endsWith("!"));
// Verifica a ultima palavra

// Exceções e tratamentos de erros
const idade = 15;

// if (idade < 18){
//     throw new Error("Você deve ter pelo menos 18 anos")
// }

try{
    const idade = 15;
    if (idade < 18){
        throw new Error("Você deve ter pelo menos 18 anos")
    }
}   catch (error) {
    console.log(error.message);
}

console.log("Continuando o programa...")

// Callback => função
function cumprimentar(nome, callback){
    console.log("Olá, " + nome);
    callback();
}

function mostrarSaudacao(){
    console.log("Como você está?");
}

cumprimentar("Caio", mostrarSaudacao);

cumprimentar("Mirelle", function(){
    console.log("Tá tudo bem?")
});

// settimeout => Depois de um tempo executa algo,

function mostrarMensagem(){
    console.log("Essa mensagem vai ser exibida depois de 3 segundos.");
}

setTimeout(mostrarMensagem, 3000);

setTimeout(function (){
    console.log("Oi");
}, 1000);

// Promises

// Promete que o código vai executar após alguma coisa kkk

