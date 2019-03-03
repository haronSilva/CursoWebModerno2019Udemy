/**
 * Passando parametros entre módulos
 */

module.exports = (...nomes) => {
 return nomes.map(nome => `Bem vindo ${nome}`)
}

