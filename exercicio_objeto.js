/*1) Crie uma classe para representar carros. 
Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê o valor 
gasto em reais para realizar este percurso.
*/
class Carros {
    marca;
    cor;
    gastoMedioPorKm;

    constructor (marca, cor, gastoMedioPorKm){
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = 1 / gastoMedioPorKm;
    }

    calcularValorGasto(distancia, preco){
        return (distancia * this.gastoMedioPorKm * preco).toFixed(2);
    }
}

const uno = new Carros('Fiat', 'Preto', 13);
console.log(uno);

console.log('Você vai gastar R$' + uno.calcularValorGasto(200, 5.89) + ' na viagem.');


/*
2) Crie uma classe para representar pessoas.
Para cada pessoa teremos os atributos nome, peso e altura.
As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peça ao José para dizer o valor
do seu IMC;
*/
