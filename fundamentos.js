// Fundamentos

var minhaVariavel = "Olá, mundo";

console.log(minhaVariavel)

// Variáveis e tipos de dados
var meuNumero = 10;
console.log(meuNumero);
console.log(meuNumero + 50);

console.log(typeof meuNumero);
console.log(typeof minhaVariavel);

var meuObjeto = {};
var meuArray = [];
var meuNull = null;
var meuUndefined =  undefined;

// let e const
// novas formas de declarar variáveis

let x = 10;
const y = 5;

console.log(x + y);
console.log(x, y);
console.log(typeof x);

// Operadores de comparação

console.log(x == y);
console.log(x != y);
console.log("5" === 5);
console.log("5" == 5);
console.log("5" !== 5); // Se o tipo e o valor são diferentes

// Operadores lógicos
// And &&
// OR ||

console.log(10 > 5 && 20 > 5);
console.log(10 > 5 && 20 < 5);

console.log(10 > 5 || 20 > 5);
console.log(10 > 5 || 20 < 5);

// Conversão de tipos

const meuNumero2 = "50";
console.log(typeof meuNumero2);
const meuNumeroConvertido = Number(meuNumero2);
console.log(typeof meuNumeroConvertido);

const meuNumero4 = 40;
const meuNumeroConvertido4 = String(meuNumero4);
console.log(typeof meuNumeroConvertido4);

// Estrutura de condição - if, else, else if

const idade = 21;

if (idade < 15){
    console.log("Criança");
} else if (idade < 20) {
    console.log("Adolescente");
} else {
    console.log("Adulto");
}

// Switch

const fruta = "Melancia";

switch (fruta){
    case "Banana":
        console.log("Banana é a futa!");
        break;
    case "Melancia":
        console.log("Melancia é a fruta!");
        break;
    case "Biscoito":
        console.log("Biscoito é massa!");
        break;
    default:
        console.log("Fruta ou biscoito não encontrada!");
}

// Estruturas de repetição
// 1, 2, 3, 4, 5, 6... => Dependendo de uma condição(Tarefas repetitivas)

// Contador, Condição de limite e Incremento
for (let i = 0; i < 5; i++){
    console.log("O valor de i é " + i);
}

// While
let k = 0;

while(k < 5){
    console.log("O valor de K: " + k);
    k++;
}

// do while

let j = 0;

do {
    console.log("O valor de J é: " + j);
    j++;

} while(j < 5);

// Funções