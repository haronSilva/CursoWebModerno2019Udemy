/**
 * This no contexto do node
 */

console.log(this === global)
console.log(this === module)
console.log(this === module.exports)
console.log(this === exports)

function logThis(){
    console.log('This dentro de uma função aponta para global? R:')
    console.log(this === global)
}

logThis()