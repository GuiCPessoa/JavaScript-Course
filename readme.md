# Curso de JavaScript com exercícios e projetos - Hora de Codar


Estou começando mais um curso e farei as anotações e comentários pertinentes nesse readme. Poderia usar o Notion mas por algum motivo vou preferir deixar nesse repositório.

# Fundamentos
JavaScript é uma linguagem de tipagem dinâmica

JS interpreta vários dados como objetos

Eu posso declarar uma variável e não inicializar ela (Ex: `let nome;`) se você colocar um `console.log(nome)` vai resultar `Undefined`, porque existe um valor padrão para esse caso (um valor que indica ao JS que a variável não tem valor)

Não podemos **redeclarar** variáveis com `Let`

Não pode fazer uma atribuição para uma variável `const`, no `Let` funciona se fizer `let nome = ‘Solo’;` e depois alterar: `nome = ‘Double’`(JS permite para o `Let`, no `const` não)

Usar o *const* para garantir mais confiabilidade no nosso código para garantir que variáveis não irão trocar de valor durante o programa.

Esse operador `===` leva em consideração para fazer comparação o *tipo do dado*. Se você colocar `console.log("5" == 5) retorna True` e `console.log("5 === 5") retorna False`, entendeu né? Gera mais confiabilidade para o código.

`Switch` é uma instrução usada para executar diferentes ações com base em diferentes condições. a expressão switch é avaliada uma vez e o valor da expressão é comparado com os outros valores de cada caso, se houver correspondência, o bloco associado será executado. O switch quando encontra uma instrução certa, ele executa todas as demais, por isso é necessário usar o *Break*, cada `case` tem que ter um *Break*. (Ele executa tudo que está abaixo da instrução correta)

## Estruturas de Repetição -
(pequeno comentário pessoal) é muito bom revisar esses conceitos em outra linguagem quando você já conhece a teoria. Na primeira vez vendo Python na faculdade tive MUITA dificuldade com isso mas agora tudo está tranquilo 😄

Começando pelo *For*:
    Exemplo: `for (let i = 0; i < 5; i = i + 1)`

é composto por Contador, Condição de limite e incremento

*O contador* é a variável que faz o loop ser encerrado. 
*A condição de limite* você escolhe até quando o loop vai ser executado.
        
Você já tem uma condição que é verdadeira (i=0) e ele vai ser executado até chegar a 5 **mas como o (i) vai chegar a 5?**

Nessa parte entra o *incremento*, vai ser uma operação para que cada vez que o loop rodar, a condição de (i) ser "movimentada" e chegar no valor que você colocou na condição de limite!

**Depois vem o While:**

Nesse aqui você só precisa colocar onde vai terminar, qual vai ser a condição de limite, mas é necessário colocar outros parâmetros para o loop funcionar. Lembre-se de organizar a estrutura que você está vendo no For (contador, condição de limite e incrmento) para o While, ele tem essa "liberdade" a mais, mas não é bagunça!

**Do while:**

Esse se torna um pouco diferente mas o principio é o mesmo. Você define a variável fora do laço, coloca o (Do) e tudo o que ele precisa executar vai estar dentro do (Do) e no fim, o while vai conter a condição de limite do laço. Vai executar o Do até o While ser verdadeiro *Veja o exemplo que está no código Fundamentos*