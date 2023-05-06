/*
1) Faça um programa que receba a média de um aluno.
Caso a média seja < 5 imprima "Reprovado"
Caso a média seja >= 5 e < 7 imprima "Recuperação"
Caso a média seja >= 7 imprima "Aprovado"

    Exemplo:
        Entrada:
            5.5
        Saída:
            Recuperação
*/
function classificarMedia(media){
    if (media < 5) {
        console.log('Você foi REPROVADO!');
    } else if ((media >= 5) && (media < 7)) {
        console.log('Você ficou em RECUPERAÇÃO!');
    } else {
        console.log('Meus parabéns! Você foi APROVADO!');
    }
}

const media = 5.5;

classificarMedia(media);