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