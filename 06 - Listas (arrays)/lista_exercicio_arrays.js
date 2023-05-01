
// 1) Crie um programa que dado um número imprima a sua tabuada.
/* 
//  Resolução abaixo
const numero = 7;
let resultado = 0;
for (let i = 0; i <= 10; i++) {
   resultado = i * numero;
   console.log(i + ' x ' + numero + ' = ' + resultado);
}
//  Fim da resolução
*/ 

// 2) Crie um programa que seja capaz de percorrer uma lista de números e imprima cada número Par encontrado.
/*
//  Resolução abaixo
const numeros = [0,1,2,3,4,5,6,7,8,9,10];
console.log('Da lista de números: ' + numeros);
for (let i = 0; i < numeros.length; i++) {
   let numero = numeros[i];
   if (numero % 2 === 0) {
      console.log('O número ' + numeros[i] + ' é PAR.');
   }
}
//  Fim da resolução
*/

// 3) Faça um programa que dado uma lista de nomes imprima os nomes que começem com a letra "V".
/*
//  Resolução abaixo
const nomes = ['Agryo', 'Vanessa', 'Naedja', 'Kamila', 'Valeria', 'Carlos', 'Humberto', 'Vagner', 'João', 'Vinicius'];
for (let i = 0; i < nomes.length; i++) {
   let nome = nomes[i];
   if (nome.indexOf("V") != -1) {
      console.log(nomes[i]);
   }
}
//  Fim da resolução
*/

// 4) Faça um programa que preencha uma lista com todos os números pares contidos no intervalo de 10 a 50;
/*
//  Resolução abaixo
let numerosPares = [];
for (let i = 10; i <= 50; i++) {
   if (i % 2 === 0) {
      numerosPares[i] = i;
      console.log(numerosPares[i]);      
   }
}
//  Fim da resolução
*/

/* 5) Dado uma lista com as médias tiradas pelos alunos. Imprima todas as médias que ficaram de recuperação (média < 5).
   Ex de lista = [2, 7, 3, 8, 10, 4]
*/
/*
//  Resolução abaixo
const medias = [3, 1, 5, 1, 2, 8];
let soma = 0;
for (let i = 0; i < medias.length; i++) {
   soma = soma + medias[i];
}
let resultado = soma / medias.length;
if (resultado < 5) {
   console.log('Você está em RECUPERAÇÃO! \nSeu resultado final foi: ' + resultado.toFixed(1));
} else {
   console.log('Você PASSOU! \nSeu resultado final foi: ' + resultado.toFixed(1));
}
//  Fim da resolução
*/

/*6) Dado uma lista com as notas tiradas pelos alunos. imprima a maior nota.
   Ex de lista de notas = [2, 7, 3, 8, 10, 4]
*/

//  Resolução abaixo
const notas = [2.9, 5.9, 8.9, 1.9, 8.1, 7.1, 10, 5.9, 2.9];
function maiorNota(){
   let maiorNota = 0;
   for (let i = 0; i < notas.length; i++) {
      if (maiorNota > notas[i]) {
      } else {
         maiorNota = notas[i];
      }
   }
   return maiorNota;
}
function menorNota(){
   let menorNota = 10;
   for (let i = 0; i < notas.length; i++) {
      if (menorNota > notas[i]) {
         menorNota = notas[i];
      }
   }
   return menorNota;
}
console.log('Entre as notas: '+ notas + '\nA maior é: ' + maiorNota() + ' e a menor é: ' + menorNota());
//  Fim da resolução
