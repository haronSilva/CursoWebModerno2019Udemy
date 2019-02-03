/**
 * Variáveis do tipo LET tem escopo de bloco!
 * No exemplo abaixo, como o var tem escopo mais abrangente e o let tem escopo de bloco, 
 * não vai existir nenhum tipo de conflito. Da mesma forma se fosse 2 let.
 * 
 * Escopos possíveis: Global, Function e Bloco
 */

var numero = 1
{
    let numero = 2
    console.log('dentro do bloco: '+numero)
}
console.log("fora do bloco: "+numero)
/**
 * Abaixo o javascript procura onde ta a variavel do primeiro escopo pra imprimir
 * assim que acha ele usa. Nesse caso não da problema, porque existe um bloco seprando os escopos.
 */
let numeroX = 1
{
    let numeroX = 2
    console.log('dentro do bloco: '+numeroX)
}
console.log("fora do bloco: "+numeroX)