/**
 * Porque que no javascript eu consigo manipular os atributos de um objeto declarado como CONST?
 */
//Pessoa aponta para um endeço de memória, que por sua vez consta o objeto
 const pessoa = {nome : 'Pedro'}
 //O que não pode é apontar para outro endereço, como exemplo abaixo
 //pessoa = {nome : 'ana'}

 /**
  * Existe um método do objeto Object que se chama freeze. O proprósito desse método é 'congelar'
  * o estado desse objeto no momento que ele foi definido! Então ele não vai deixar você realizar nenhum
  * tipo de alteração no objeto.
  */

Object.freeze(pessoa)
pessoa.nome = 'Jenifer'
//Ele continua mantendo o estado do que foi declarado.
console.log(pessoa)