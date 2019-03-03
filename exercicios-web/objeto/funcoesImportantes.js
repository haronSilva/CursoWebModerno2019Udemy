/**
 * Funções importantes usadas no Object
 */

const pessoa = {
    nome : 'Flora',
    peso : 13,
    idade: 2
}


//Retornar todas as chaves de um objeto
console.log(Object.keys(pessoa))
//Retornar todas os valores de um objeto
console.log(Object.values(pessoa))
//Retornar um array de arrays de chave e valor de um objeto
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(element => {
    console.log(`${element[0]} : ${element[1]}`)
});

//Usando destructuring
console.log('Com destructuring em um array')
Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave} : ${valor}`)
});

//Definição de propriedades de atributos de um objeto de forma mais específica.
Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable : false /*Propriedade que habilita a visualização do mesmo em métodos como keys */,
    writable: false /*Se pode ser sobrescrito */,
    value: '01/01/2019'
})
pessoa.dataNascimento = '11/01/2019'
console.log(pessoa.dataNascimento)

//Método adicionado no Ecma script 2015
/**
 * Responsável por adicionar atributos de outros objetos no objeto destino
 * Quando estiver o mesmo atributo, o valor será sobrescrito.
 */
const dest = {a : 1}
const o1 = {b:2}
const o2 = {c:3, a:4}
const obj = Object.assign(dest, o1, o2)
console.log(obj)

//Congelando o objeto
Object.freeze(obj)
obj.a = 2
console.log(obj)