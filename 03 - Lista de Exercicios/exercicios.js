/*
1) Faça um algorítimo que dado as 3 notas tiradas por um aluno em um semestre da faculdade
   calcule e imprima a sua média e a sua classificação conforme a tabela abaixo.

Média = (nota 1 + nota 2 + nota 3) / 3;

Classificação:
- Média menor que 5, reprovação;
- Média entre 5 e 7, recuperação;
- Média acima de 7, passou de semestre;
*/
/*
// Inicio da resolução
const nota1 = 5.9;
const nota2 = 6.9;
const nota3 = 9.1;
const media = (nota1 + nota2 + nota3) / 3;

if (media < 5) {
   console.log('Você foi reprovado! Sua média foi: ' + media.toFixed(1));
} else if ((media > 5) && (media < 7)) {
   console.log('Você ficou em recuperação! Sua média foi: ' + media.toFixed(1));
} else {
   console.log('Parabéns!!! Você passou! Sua média foi: ' + media.toFixed(1));
}
// Fim da resolução
*/

/*
2) O IMC – Indice de Massa Corporal é um critério da Organização Mundial de Saúde
   para dar uma indicação sobre a condição de peso de uma pessoa adulta. 

Formula do IMC:
IMC = peso / (altura * altura)

Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo.

IMC em adultos Condição:
- Abaixo de 18.5 Abaixo do peso;
- Entre 18.5 e 25 Peso normal;
- Entre 25 e 30 Acima do peso;
- Entre 30 e 40 Obeso;
- Acima de 40 Obsesidade Grave;
*/
/*
// Inicio da resolução
const peso = 150.3;
const altura = 1.87;
const imc = ((peso / (altura * altura)).toFixed(1));

if (imc < 18.5) {
   console.log(imc + ' IMC - Você está abaixo do peso!');
} else if ((imc > 18.5) && (imc < 25)) {
   console.log(imc + ' IMC - Seu peso está normal.');
} else if ((imc > 25) && (imc < 30)) {
   console.log(imc + ' IMC - Você está acima do peso!');
} else if ((imc > 30) && (imc < 40)) {
   console.log(imc + ' IMC - Você está Obeso!');
} else {
   console.log(imc + ' IMC - Você está com Obesidade Grave!');
}
// Fim da resolução
*/

/*
3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando
   o preço normal de etiqueta e a escolha da condição de pagamento. 

   Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

Código Condição de pagamento:
- À vista Débito, recebe 10% de desconto;
- À vista no Dinheiro ou PIX, recebe 15% de desconto;
- Em duas vezes, preço normal de etiqueta sem juros;
- Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/
// Inicio da resolução
const condicaoPagamento = 4;
const preco = 259.50;
let total = 0;
if (condicaoPagamento === 1) {
   total = (preco * 0.9).toFixed(2);
   console.log('Você escolheu Débito (10% de desconto).\nTotal a pagar: ' + total);
} else if (condicaoPagamento === 2) {
   total = (preco * 0.85).toFixed(2);
   console.log('Você escolheu Dinhero ou PIX (15% de desconto).\nTotal a pagar: ' + total);
} else if (condicaoPagamento === 3) {
   total = (preco/2).toFixed(2);
   console.log('Você escolheu parcelar em Duas Vezes.\nTotal a pagar: Duas de ' + total);
} else if (condicaoPagamento === 4) {
   total = (preco * 1.1).toFixed(2);
   console.log('Você escolheu em mais de Duas Vezes.\nTotal a pagar: ' + total);
} else {
   console.log('Escolha uma opção de pagamento entre 1 e 4');
}
// Fim da resolução