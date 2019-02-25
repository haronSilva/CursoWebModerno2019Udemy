/**
 * Uso do objeto global do node
 * Geralmente essa estratégia é pra ser usada em casos bem específicos. Então é uma boa prática
 * deixa-lo constante usando o freeze do object.
 */

 global.MeuApp = Object.freeze({
     ola(){
         return 'olá'
     }
 })