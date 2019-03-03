/**
 * Desafio com map
 */

 const carrinho = [
     '{"nome":"Borracha", "preco": 3.45}',
     '{"nome":"Caderno", "preco": 13.90}',
     '{"nome":"Kit de Lapis", "preco": 41.22}',
     '{"nome":"Caneta", "preco": 7.50}'
 ]

 //Retornar um array apenas com os preços
// Minha solução
 const somentePrecos = carrinho.map(json => {
     const produto = JSON.parse(json)
     return produto.preco
 })

 console.log(somentePrecos)

 //Solução do instrutor - Ele usou maps encadeados
 const parseParaObjeto = json => JSON.parse(json)
 const apenasPreco = produto => produto.preco

 const resultado = carrinho.map(parseParaObjeto).map(apenasPreco)

 console.log(`Implementação instrutor: ${resultado}`)