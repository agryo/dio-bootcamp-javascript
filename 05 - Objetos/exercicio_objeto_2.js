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
        return (this.peso / (this.altura * this.altura)).toFixed(1);
    }

    classificarImc(){
        if (this.calcularImc() < 18.5){
            return 'Magreza = Você está muito magro!';
        } else if (this.calcularImc() >= 18.5 && this.calcularImc() <= 24.9){
            return 'Normal = Seu peso está normal.';
        } else if (this.calcularImc() >= 25 && this.calcularImc() <= 29.9){
            return 'Sobrepeso = Você está ficando gordo.';
        } else if (this.calcularImc() >= 30 && this.calcularImc() <= 39.9){
            return 'Obesidade = Você está muito gordo!';
        } else {
            return 'Obesidade GRAVE! = Procure AJUDA!';
        }
    }
}

const agryo = new Pessoa('Agryo', 83, 1.87);
const ajr = new Pessoa('Alex Jr', 43, 1.72);
const hjr = new Pessoa('Humberto Jr', 95, 1.77);
const lelin = new Pessoa('Lelin', 180, 1.69);

console.log(ajr.nome + ' está com o IMC: ' + ajr.calcularImc());
console.log(ajr.classificarImc() + '\n');

console.log(agryo.nome + ' está com o IMC: ' + agryo.calcularImc());
console.log(agryo.classificarImc() + '\n');

console.log(hjr.nome + ' está com o IMC: ' + hjr.calcularImc());
console.log(hjr.classificarImc() + '\n');

console.log(lelin.nome + ' está com o IMC: ' + lelin.calcularImc());
console.log(lelin.classificarImc());
