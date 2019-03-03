/**
 * Acessando módulos externos: Aprendendo a importar bibliotecas externas
 * 
 * Dependencia acessa é o lodash: Uma biblioteca de funcionalidades commons
 */
/**
 * Um fato interessante no node, é que se eu citar o nome da biblioteca que eu importei no require,
 * ele procura o index.js da pasta que eu foi incluida com o nome da bibilioteca. Dessa forma, eu vou
 * acessando todas as funcionalidades dessa biblioteca.
 */
const _ = require("lodash")

setInterval(() => console.log(_.random(1, 1000)),2000)