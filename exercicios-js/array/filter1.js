/**
 * Usando filter - Filtrando informações de um array retornando um novo
 * O callback deve sempre realizar uma operação lógica (VERDADEIRO OU FALSO) para verificar se o valor entra no
 * novo array ou não
 */

const produtos = [
    {nome : 'Notebook', preco: 2499, fragil: true },
    {nome : 'Ipad', preco: 4199, fragil: true },
    {nome : 'Copo de Vidro', preco: 12.49, fragil: true },
    {nome : 'Copo de Plástico', preco: 18.99, fragil: false}
]
const somenteFrageis = obj => obj.fragil
const produtoMaioresIguaisQueQuinhentosReais = obj => obj.preco >= 500

console.log(produtos.filter( obj => obj.fragil))
//Filter encadeado - Desafio do instrutor
console.log(produtos.filter(somenteFrageis).filter(produtoMaioresIguaisQueQuinhentosReais))

