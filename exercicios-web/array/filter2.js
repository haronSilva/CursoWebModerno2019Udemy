/**
 * Criando o meu próprio filter
 */

Array.prototype.meuFilter = function(callBack){
    const newArray = []
    
    for (let i=0; i < this.length; i++){
        if(callBack(this[i], i, this)){
            newArray.push(this[i])
        }
    }

    return newArray
}

const produtos = [
    {nome : 'Notebook', preco: 2499, fragil: true },
    {nome : 'Ipad', preco: 4199, fragil: true },
    {nome : 'Copo de Vidro', preco: 12.49, fragil: true },
    {nome : 'Copo de Plástico', preco: 18.99, fragil: false}
]
const somenteFrageis = obj => obj.fragil
const produtoMaioresIguaisQueQuinhentosReais = obj => obj.preco >= 500

console.log(produtos.meuFilter( obj => obj.fragil))
//Filter encadeado - Desafio do instrutor
console.log(produtos.meuFilter(somenteFrageis).meuFilter(produtoMaioresIguaisQueQuinhentosReais))