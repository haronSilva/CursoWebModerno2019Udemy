/**
 * Aprendendo mais sobre função e a propriedade prototype
 * 
 */

function MeuObjeto() {}

const obj1 = new MeuObjeto
const obj2 = new MeuObjeto
/**
 * Em uma  função construtora, o prototype do objeto instanciado aponta para o atributo prototype da função.
 */
console.log(MeuObjeto.prototype)
console.log(obj1.__proto__ === obj2.__proto__)
console.log(MeuObjeto.prototype === obj1.__proto__)
console.log(MeuObjeto.prototype === obj2.__proto__)
//Como o retorno no atributo prototype é um objeto, eu posso ir incluindo dinâmicamente atributos e funções normalmente!!
//No caso abaixo, eu estou incluindo uma função para ser herdada nas instancias de função, quando virarem objetos
MeuObjeto.prototype.falar = () => console.log('oi!!')

obj1.falar()

//Alterar o prototype de um objeto, com o prototype de uma função

const obj3 = {}
obj3.__proto__ = MeuObjeto.prototype
obj3.falar()

//Resumindo o uso de prototype
console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype)
console.log(MeuObjeto.__proto__ === Function.prototype)
console.log(Function.prototype.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)