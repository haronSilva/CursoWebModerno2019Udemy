/**
 * Lendo arquivos no node - File System
 */

const fs = require('fs')

//Leitura sincrona - __dirname é uma constante reservada para dizer o diretório corrente
const caminho = __dirname + '/arquivo.json'

const conteudo = fs.readFileSync(caminho, 'UTF-8')

console.log(conteudo)

//Leitura Assincrona
fs.readFile(caminho,'UTF-8', (erro, conteudo) => {
    const config = JSON.parse(conteudo)

    console.log(`${config.db.host}:${config.db.port}`)
})

//Outra forma sincrona de ler um arquivo JSON
const config = require('./arquivo.json')
console.log(config)

//Lendo um diretorio
fs.readdir(__dirname, (erro, arquivos) =>{
    console.log('Conteúdo da pasta')
    console.log(arquivos)
})