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
const link = document.querySelector("a"); // Por mais que tenha dois links com a tag (a) o querySelector sempre vai retornar a primeira ocorrência

console.log(link);

link.setAttribute("href", "https://behance.net/guipessoa") // Mudou a URL do atributo HREF por meio de JS

console.log(link.getAttribute("href"));
console.log(link.hasAttribute("target"));

link.removeAttribute("target"); // Removendo atributos

// Manipulação de classes do CSS
const elemento = document.querySelector("#meuId");

element.classList.add("novaClasse");
element.classList.remove("minhaClasse");
element.classList.toggle("outraClasse");
element.classList.toggle("outraClasse"); // Se a classe existe ele remove, se não existe ele adiciona

// Manipular o CSS
const elemento3 = document.querySelector("#meuId");

elemento3.style.color = "blue";
elemento3.style.backgroundColor = "red";

// Navegação entre Nós
const element4 = document.querySelector("#meuInput");
const pai = element4.parentNode;

console.log(pai);

// Obter o primeiro filho
const primeiroFilho = pai.firstChild;
console.log(primeiroFilho)
// Obter o último filho
const ultimoFilho = pai.lastChild;
console.log(ultimoFilho);


// Manipulação de estrutura do DOM

const novoElemento = document.createElement("div");
console.log(novoElemento);

novoElemento.textContent = "Minha div de JavaScript"; // Aqui você só cria um elemento mas não o adiciona em lugar nenhum, apenas cria a existência dele

document.body.appendChild(novoElemento); // Adicionando um novo elemento ao body HTML

document.body.insertBefore(novoElemento, pai); // Outra forma de adicionar elementos 

document.body.removeChild(elementosPorId); // Remover


// Eventos

// Click
const botao = document.querySelector("button");

botao.addEventListener("click", function(){
    console.log("botão clicado!") // Selecionei o elemento, adicionei o evento e fiz a ação com callback
})

// Mouse
const elemento5 = document.querySelector("#meuFormulario");

elemento5.addEventListener("mouseover", function (){
    console.log("O mouse passou aqui!"); // Perceba que aqui a marcação já é feita só do mouse passar por cima daquele elemento
})

// Teclado
const campoInput = document.querySelector("#meuInput");

campoInput.addEventListener("keydown", function(){
    console.log("Tecla pressionada"); // Cada vez que uma tecla é pressionada conta como um evento
})

// Formulario

const form = document.querySelector("form");

form.addEventListener("submit", function(event){
    event.preventDefault(); // Não deixa o comportamento padrão se de qualquer elemento que for, acontecer


    console.log("formulario enviado"); // O comportamento da página padrão de qualquer formulário em html é recarregar a página. Os Eventos Formulários são justamente para intervir nessa etapa
})


// Propagação de eventos
document.querySelector("#elementoPai").addEventListener("click", function(){
    console.log("Clique capturado no pai");
}) // Eventos no elemento Pai propagam para o filho. Seja bem especifico nos elementos

document.querySelector("#elementoFilho").addEventListener("click", function(event){
    // event.stopPropagation(); // O elemento filho executa apenas o evento dele, ele entende que outros elementos possam está desencadeando novos eventos e isso vai ser um problema, parando a execução e executando APENAS o evento do filho
    console.log("Elemento filho");
})

document.querySelector("#meuLink").addEventListener("click", function(event){
    event.preventDefault();
    console.log("clicou no link!");
})


// delegação de eventos
document.querySelector("#elementoPai").addEventListener("click", function(event){
    if(event.target.matches(".classeDosFilhos")){
        console.log("Evento delegado para o filho");
    }
})