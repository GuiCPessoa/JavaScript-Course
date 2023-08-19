// Exercicios de Fundamentos
// Exercício 1: Olá, Mundo!
// Crie um script que imprima "Olá, Mundo" no console

console.log("Olá, Mundo!"); //v1

const frase = "Olá, Mundo!";
console.log(frase);

// Exercício 2: Conversão de tipos
// Dado o valor de uma string "1234", converta-o em um número e exiba o tipo da variável no console.

const numeroTexto = "1234";
const numeroConvertido = Number(numeroTexto);

console.log(typeof numeroConvertido);

// Exercício 3: Manipulação de Strings
// Data uma string "JavaScript é incrível", escreva um código  que conte quantos caracteres a string tem e quantas palavras existem na frase.

const frase1 = "JavaScript é incrível";
const qtdCaracteres = `Existem: ${frase1.length} caracteres nessa frase`
const qtdPalavras = `Existem: ${frase1.split(" ").length} palavras`

console.log(qtdPalavras)
console.log(qtdCaracteres)
 
// Exercício 4: Loops e Arrays
// Crie um array com 5 nomes. Use um loop for para imprimir cada nome no console

const nomes = ["Guilherme", "Mirelle", "Yoda", "Morpheus", "Austin"];


for (let i = 0; i < nomes.length; i++ ){
    console.log(`Os nomes são ${nomes[i]}`)
}

// Exercício 5: Funções, Strings e Math
// Crie uma função que aceita uma string representando um horário no formato de 24 horas (por exemplo, "14:30"). A função deve retornar uma string que converta o horário para o formato de 12 horas (por exemplo, "2:30 PM"). Use o objeto Math para auxiliar nesta conversão. Certifique-se de que sua função lida corretamente com horários na meia-noite e no meio-dia.

    function converterHorario(horario24){
    //   const hora = horario24.split(":")[0]
    //   const minuto = horario24.split(":")[1] 

      const[hora, minuto] = horario24.split(":");
      const hora12 = hora % 12 || 12;

      let periodo = "AM";
      if(hora > 12){
        periodo = "PM";
      }

      console.log(`${hora12}:${minuto} ${periodo}`);
    }

converterHorario("15:16");
converterHorario("9:10");
converterHorario("23:55");