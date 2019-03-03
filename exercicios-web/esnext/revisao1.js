/**
 * Revisando as funcionalidades do ecma script
 */

//Revisando o let e const : nascidos no ecma script 6
//Escopo de bloco para variáveis do tipo let
{
    var a = 1
    let b = 2
}
//B não é visto
//console.log(a , b)

//Template string

const produto = 'iPad'
console.log(`${produto} é caro`)

//Destructuring

const [l, e, ...tra] = 'Cod3r'
console.log(l, e, tra)

const [x, y, z] = [1,2,3]

console.log(x, y, z)

const {nome , idade} = {nome : 'haron', idade: 31}

console.log(nome, idade)

//renomeando
const {nome1 : i , idade1} = {nome1 : 'haron', idade1: 31}

console.log(i, idade1)