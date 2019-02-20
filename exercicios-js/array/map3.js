/**
 * Mais exercício para implementar seu próprio map
 */

Array.prototype.meuMap = function (callBack){
    const newArray = []
    for(let i = 0; i < this.length; i++){
        newArray.push(callBack(this[i], i, this))
    }

    return newArray
}

const carrinho = [
    '{"nome":"Borracha", "preco": 3.45}',
    '{"nome":"Caderno", "preco": 13.90}',
    '{"nome":"Kit de Lapis", "preco": 41.22}',
    '{"nome":"Caneta", "preco": 7.50}'
]

const parseParaObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const resultado = carrinho.meuMap(parseParaObjeto).meuMap(apenasPreco)
console.log(resultado)
