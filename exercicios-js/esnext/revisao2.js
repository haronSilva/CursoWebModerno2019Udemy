/**
 * Continuando a revisão do ecma script
 */

//arrow functions

const funcaoArrowVoid = () => console.log('Arrow void')
const funcaoArrowReturno = () => 'Arrow Function Return'
funcaoArrowVoid()
console.log(funcaoArrowReturno())

/*
 arrow function this
 Com arrow function, o this é representado pelo local onde a função foi criada.
 como é definido abaixo. O this vai ser o module.exports, pois foi escrito
 dentro do module.

 Funções tradicionais o this será quem o chama
*/

const lexico1 = () => console.log(this === module.exports)

lexico1()

//parametro default

function log(text = 'node'){
    console.log(text)
}

log()

//operador rest
function total(...numeros){
    let total = 0
    numeros.forEach(n => total += n);
    return total
}

console.log(total(1,2,3,4,5,6))