/**
 * Terceiro tipo de declaração de funções
 */

 //function declaration
 /**
  * Com esse tipo de função, eu poderei realizar a chamada dela antes da declaração,
  * pois o interpretador javascript carregar todas as funções antes de executar meu
  * código para execução.
  * @param {*} a 
  * @param {*} b 
  */
function soma(a, b){
    return a + b
}

// function expression
/**
 * Nesse caso, eu não vou conseguir fazer a mesma coisa do exemplo acima
 * @param {*} a 
 * @param {*} b 
 */
const subtracao = function (a , b){
    return a-b
}

// named function expression
/**
 * Essa abordagem é pouco usada. A única vantagem é que no momento que eu estiver debugando,
 * eu poderei saber qual é função que da dando problema, uma vez que, ela foi nomeada.
 * @param {} a 
 * @param {*} b 
 */
const mult = function mult(a , b){
    return a * b
}