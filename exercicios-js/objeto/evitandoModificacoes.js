/**
 * Conseguindo driblar a tipagem fraca do javascript
 */

/**
 * Object. preventExtensions() - Previne de aumentar ser objeto com atributos dinâmicos
 * Mas eu tenho a possibilidade de excluir
 *  */

const produto = Object.preventExtensions({
    nome: 'Prod1', valor: 100.00, tag:'Promoção'
})
//Object.isExtensible - certifica se é extensível ou não
console.log(Object.isExtensible(produto))

delete produto.tag

console.log(produto)

/**
 * Object.seal - Você consegue somente modificar o valos dos atributos do objeto
 */

const pessoa = { nome: 'Haron', idade: 31}
Object.seal(pessoa)

//Object.isSealed() - Certifica se realmente se o objeto está selado
console.log(Object.isSealed(pessoa))
delete pessoa.nome
console.log(pessoa)

pessoa.nome = 'Amanda'

console.log(pessoa)