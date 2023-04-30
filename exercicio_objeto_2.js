/*
2) Crie uma classe para representar pessoas.
Para cada pessoa teremos os atributos nome, peso e altura.
As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peça ao José para dizer o valor
do seu IMC;
*/

class Pessoa {
    nome;
    peso;
    altura;

    constructor (nome, peso, altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularImc(){
        return this.peso / (this.altura * this.altura);
    }

    classificarImc(){
        if (this.calcularImc < 18,5){
            console.log('Magreza = Você está muito magro!');
        } else if ((this.calcularImc >= 18,5) && (this.calcularImc <= 24,9)){
            console.log('Normal = Seu peso está normal.');
        } else if (this.calcularImc >= 25 && this.calcularImc <= 29,9){
            console.log('Sobrepeso = Você está ficando gordo.');
        } else if (this.calcularImc >= 30 && this.calcularImc <= 39,9){
            console.log('Obesidade = Você está muito gordo!');
        } else {
            console.log('Obesidade GRAVE! = Procure AJUDA!');
        }
    }
}

const agryo = new Pessoa('Agryo', 83, 1.87);

console.log(agryo.calcularImc());

console.log(agryo.classificarImc());