/*
2) Faça um programa que receba N quantidade de números e seus respectivos valores. Em seguida
Imprima o maior número par e o menor número impar.

    Exemplo:
        Entrada:
            5
            3
            4
            1
            10
            8

        Saída:
            Maior número par: 10
            Menor número impar: 1
*/
function maiorPar(numeros) {
    maiorPar = 0;
    for (let i = 0; i < numeros.length; i++) {
        if (maiorPar < numeros[i]) {
            maiorPar = numeros[i];
        }        
    }
    return maiorPar;
}

function menorImpar(numeros) {
    menorImpar = 99;
    for (let i = 0; i < numeros.length; i++) {
        if (menorImpar > numeros[i]) {
            menorImpar = numeros[i];
        }        
    }
    return menorImpar;
}

const numeros = [5, 3, 4, 1, 10, 8];

console.log('Maior número Par: ' + maiorPar(numeros));
console.log('Menor número Impar: ' + menorImpar(numeros));