/**
 * Formas de retirar estruturas dentro de objetos.
 * Recurso criado no EcmaScript 2015
 */
const pessoa = {
    nome: "Haron",
    idade: 31,
    endereco : {
        cidade: "Valinhos"
    }
}

//operador destructuring - Retirando os atributos nome e idade do objeto pessoa.
const {nome, idade} = pessoa

console.log(nome, idade)
//Uma forma de atribuir em novas variáveis
const {nome: nomeN, idade: idadeN} = pessoa
console.log(nomeN, idadeN)