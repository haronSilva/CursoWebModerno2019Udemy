/**
 * usando call e apply para invocar funções. A diferença entre as duas abordagens é a forma com os 
 * parâmetros são informados.
 */

 function getPreco(imposto = 0, moeda = 'R$'){
     return `${moeda} ${this.preco * (1- this.desc) * (1 + imposto)}`
 }

 const produto = {
     nome: 'Notebook',
     preco: 4589,
     desc:  0.15,
     getPreco /* Só de informar o nome ele já cria a atribuição da função acima para variável ao lado */
 }
// O objeto global foi setado para que o this funcione no contexto esperado.
 global.preco = 20
 global.desc = 0.1

 console.log(getPreco())
 console.log(produto.getPreco())

const carro = { preco: 49990, desc: 0.20}
//Sem parâmetros
console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))
//Com parâmetros
//Informando os parâmetros no call: Contexto, param1, param2, ...
console.log(getPreco.call(carro, 50, '$'))
//Informando os parâmetros no apply: Contexto, [param1, param2, ...]
console.log(getPreco.apply(carro, [50, '$']))
