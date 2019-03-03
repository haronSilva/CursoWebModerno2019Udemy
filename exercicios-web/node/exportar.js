/**
 * Entendendo um pouco mais sobre exports e module.exports
 * 
 * O exports aponta para o mesmo objeto module.exports, mas somente o modules.exports será exposto para 
 * toda a aplicação
 */

console.log(module.exports === this)
console.log(exports === module.exports)