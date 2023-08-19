// Exercício de Manipulação de Array

// Crie uma lista de compras que é inicialmente vazia.
// Adicione 5 itens à lista usando push()
// Agora, remova o primeiro item da lista usando shift ()
// Imprima a lista final no console.

const listaDeCompras = [];

console.log(listaDeCompras);

listaDeCompras.push("Biscoito", "Banana", "Arroz", "Toddynho", "Maçã");
listaDeCompras.shift();

console.log(listaDeCompras);

// Exercício de Manipulação de Array - find()

// Você tem um array de números: [3, 7, 14, 21, 29, 36, 42]
// Use a função find() para encontrar o primeiro número que é divisivel 7
// e maior que 10

const numerosEx = [3, 7, 14, 21, 29, 36, 42];

const firstNumber = numerosEx.find((num) => num % 7 === 0 && num > 10);

console.log(firstNumber);

// Exercício de Manipulação de Array - Filter()

// Dado o array de números: [5, 10, 15, 20, 25, 30, 35, 40]
// Use a função filter() para criar um novo array que contenha apenas os números
// que são maiores que 20

const numerosEx2 = [5, 10, 15, 20, 25, 30, 35, 40];

const numerosMaiores2 = numerosEx2.filter((num) => num > 20);

console.log(numerosMaiores2);

// Exercicio de Manipulação de String - Split(), Trim()

// Dada a string: " Bom dia, mundo! "
// Remova os espaços em branco no início e no final da string
// em seguida, divida a string em palavras.

const frase = " Bom dia, mundo! ";

const palavras = frase.trim().split(" ");

console.log(palavras);

// Exercicio de manipulação de string - startsWith(), endsWitch()

// Dada a string: "O rato roeu a roupa do rei de Roma."
// Verifique se a string começa com a palavra "O" e termina com a palavra Roma

const frase2 = "O rato roeu a roupa do rei de Roma."

const comecaCom = frase2.startsWith("O");
const terminaCom = frase2.endsWith("Roma");

console.log(comecaCom);
console.log(terminaCom);