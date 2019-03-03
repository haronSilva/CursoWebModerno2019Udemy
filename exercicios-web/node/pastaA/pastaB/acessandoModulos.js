/**
 * Simulando imports de um projeto com vários pacotes e níveis de pacotes.
 * Um ponto importante é: Quando eu não faço a referência do caminho onde meu módulo está, o node vai
 * procurar no node_modules e ai procura o index.js 
 */

 const moduloA = require('../../moduloA')
 console.log(moduloA.ateLogo)

 /**
  * Fazendo chamada de um biblioteca que fica no módulo core do node.
  */

const http = require('http')
/**
 * Com o create server eu acabo de subir um servidor e escrever uma mensagem html
 */
/*http.createServer((request, response)=> {
    response.write('Olá com node')
    response.end()
}).listen(8080)*/

const moduloC = require('./pastaC')
console.log(moduloC.ola)
