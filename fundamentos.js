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
// function nome(arg1, arg2) { corpo }
function cumprimentar(nome) {
    console.log("Olá " + nome);
}

// invocação = nome()
cumprimentar("Caio");

// Algo que talvez seja cavernoso porque estou com Python na cabeça e isso é perfeitamente normal KKKK
function soma(numero1, numero2){
    let resultado = numero1 + numero2;

    console.log("O resultado de ", numero1, "+", numero2, "=" ,resultado);
}

soma(10, 54);

// Escopo de variáveis
let cor = "azul";

function mostrarCor(){
    let cor = "verde";
    console.log(cor)
}

console.log(cor);
mostrarCor();

// Hoisting = içamento
testHoisting();

function testHoisting(){
    console.log("Deu certo!")
}

// Arrow function
const testeArrow = () => console.log("Isso também uma função.");

// => fatArrow
// Depois você escreve o que a função irá fazer
// Também poderia ter argumentos no parenteses

testeArrow();

// Array, listas
const numeros = [1, 2, 3, 4, 5];
console.log(numeros);
console.log(numeros[2])
console.log(numeros[0])

// Push coloca algum elemento no Array

numeros.push(6);
console.log(numeros)

// Pop tira o último elemento do Array

numeros.pop()
console.log(numeros)

// Strings - Concatenação
const minhaStringNova = 'Olá, mundo!';

const minhaString3 = minhaStringNova + " Como você está?";

console.log(minhaString3);

// Strings - Interpolação
const minhaString4 = `${minhaStringNova} Como você está?`;
console.log(minhaString4);

console.log(minhaString4.length); // Quantidade de caracteres
console.log(minhaString4[5]); // Caractere que está no indice tal
console.log(minhaString4.toUpperCase()); // Caixa Alta

// Data e Hora
const agora = Date();
console.log(agora);

// Os meses começam a contar do 0 (janeiro = 0, fevereiro = 1) 

// Math
console.log(Math.PI); // Valor de PI
console.log(Math.round(3.6)) // Teto "Famoso arredondar pra cima"
console.log(Math.sqrt(16)); // Raiz quadrada
