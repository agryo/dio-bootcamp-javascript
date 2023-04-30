/*
Faça um programa pra calcular o valor de uma viagem.

Você terá 3 valores (variáveis). Sendo elas:
1 - Preço do combustível.
2 - Gasto médio  de combustível do carro por KM.
3 - Distância em KM da viagem.
*/
const precoCombustivel = 5.89;
const gastoMedioPorKm = 16;
let distanciaKm = 210;

let litrosGastos = distanciaKm / gastoMedioPorKm;
let valorGasto = litrosGastos * precoCombustivel;

console.log(valorGasto.toFixed(2));