/**
 * Usando o método map.
 * Esse método é utilizado para transformar os dados de array retornando esses novos dados
 * em um novo array. O call back para essa função terá o propósito de retornar o valor de cada
 * iteração transformado.
 */

const nums = [1, 2, 3, 4]

let resultado = nums.map(function(valor){
    return valor * 2
})

console.log(resultado)

const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace(',', ',')}`

//Chamando de forma encadiada
resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado)