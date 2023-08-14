# Curso de JavaScript com exercícios e projetos - Hora de Codar


Estou começando mais um curso e farei as anotações e comentários pertinentes nesse readme. Poderia usar o Notion mas por algum motivo vou preferir deixar nesse repositório.

## Fundamentos
JavaScript é uma linguagem de tipagem dinâmica

JS interpreta vários dados como objetos

Eu posso declarar uma variável e não inicializar ela (Ex: `let nome;`) se você colocar um `console.log(nome)` vai resultar `Undefined`, porque existe um valor padrão para esse caso (um valor que indica ao JS que a variável não tem valor)

Não podemos **redeclarar** variáveis com `Let`

Não pode fazer uma atribuição para uma variável `const`, no `Let` funciona se fizer `let nome = ‘Solo’;` e depois alterar: `nome = ‘Double’`(JS permite para o `Let`, no `const` não)

Usar o **const** para garantir mais confiabilidade no nosso código para garantir que variáveis não irão trocar de valor durante o programa.

Esse operador `===` leva em consideração para fazer comparação o **tipo do dado**. Se você colocar `console.log("5" == 5) retorna True` e `console.log("5 === 5") retorna False`, entendeu né? Gera mais confiabilidade para o código.