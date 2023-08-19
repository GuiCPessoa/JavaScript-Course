// Selecionar elementos

const elementosPorId = document.getElementById("meuId");

console.log(elementosPorId); // Metodo pouco antigo

const elementosPorId2 = document.querySelector("#meuId") // Mais atual, permite pegar o seletor do CSS

console.log(elementosPorId2);

const elementosPorClasse = document.querySelector(".minhaClasse");

console.log(elementosPorClasse);

// Manipular conteúdo de texto

const element = document.querySelector("#meuId"); // Aqui você pega o elemento TODO

console.log(element.textContent); // Aqui vem só o conteúdo dentro do elemento

setTimeout(() => {
    element.textContent = "Mudei de texto";
}, 1000);

// Trabalhando com atributos