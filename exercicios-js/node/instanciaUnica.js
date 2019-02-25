/**
 * O node quando um modulo é exportado o mesmo fica cacheado.
 * Abaixo, segue uma estratégia que comprova que o node faz o cache do objeto.
 */
//Exemplo cache
 module.exports = {
     valor : 0,
     inc(){
         this.valor+= 1
     }
 }