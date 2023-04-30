class Pessoa {
    nome;
    idade;
    altura;
    anoDeNascimento;

    constructor(nome, idade, altura) {
        this.nome = nome;
        this.idade = idade;
        this.altura = altura;
        this.anoDeNascimento = 2023 - idade;
    }

    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade} e tenho ${altura} de altura.`);  
    }
}

// Essa função faz a comparação de dois Objetos. Os objetos tem varias possibilidades de comparação.
function compararPessoas(p1, p2) {
    if (p1.idade > p2.idade) {
        console.log(`${p1.nome} é mais velho(a) que ${p2.nome}`);
    } else if (p2.idade > p1.idade) {
        console.log(`${p2.nome} é mais velho(a) que ${p1.nome}`);
    } else {
        console.log(`${p1.nome} e ${p2.nome} tem a mesma idade`);
    }
}

function compararAltura(p1, p2){
    if (p1.altura > p2.altura){
        console.log(`${p1.nome} é mais alto que ${p2.nome}.`);
    } else if (p2.altura > p1.altura){
        console.log(`${p2.nome} é mais alto que ${p1.nome}.`);
    } else {
        console.log(`${p1.nome} e ${p2.nome} têm a mesma altura.`);
    }
}

const agryo = new Pessoa('Agryo', 37, 1.87);
const hjr = new Pessoa('Humberto', 27, 1.75);

compararPessoas(agryo, hjr);
compararAltura(agryo, hjr);