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
