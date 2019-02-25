/**
 * Teste das instâncias únicas e clientes
 */
const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')

const contadorC = require('./instanciaNova')()
const contadorD = require('./instanciaNova')()

contadorA.inc()
contadorA.inc()
//Como existe o cache, é como se as variáveis apontassem para o mesmo objeto
console.log(contadorB.valor)

contadorC.inc()
contadorC.inc()

console.log(contadorD.valor, contadorC.valor)
