/**
 * Aqui será criado uma variável que receberá uma função anônima
 * 
 */

 const imprimirSoma = function (a, b){
    console.log(a+b)
 }

 /**
  * Com a vinda do Ecmascript 2015, veio uma forma reduzida de criar funções
  * que é a função arrow =>. 
  */

const imprimirSomaArrow = (a, b) => {
    console.log(a + b)
}

/**
 * retorno implícito com arrow function ou  sem retorno também!
 */

const substracao = (a , b) => (a - b)

imprimirSoma(1,2)
imprimirSomaArrow(3,4)
console.log(substracao(2, 1))
