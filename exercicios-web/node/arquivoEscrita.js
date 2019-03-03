/**
 * Gerando um arquivo no node
 */

const fs = require('fs')

const produto = {
    nome : 'Celular',
    preco: 1299.99,
    desconto: 0.15
}
//Escrita assincrona
fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), erro => {
    console.log(erro || 'Arquivo gerado com sucesso!')
})