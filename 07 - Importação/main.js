const { gets, print } = require('./funcoes_auxiliares');
/*
    Uma sala contem 5 alunos e para cada aluno foi sorteado um numero de 1 a 100.
    Faça um programa que receba 5 números sorteados para os alunos e mostre o maior número sorteado;

    Dados de entrada:
    10, 5, 50, 10, 98, 23, 33, 44, 100, 1, 7

    Saída:
    100
*/

const quantidadeDeAluno = gets();
let maiorValor = 0;

for (let i = 0; i < quantidadeDeAluno; i++) {
    const numeroSorteado = gets();
    if (numeroSorteado > maiorValor) {
        maiorValor = numeroSorteado;        
    }
}

print(maiorValor);