/**
 * Formas de identificação/atribuição para valores booleanos
 */

let isAtivo = true

console.log(isAtivo)

isAtivo = false

console.log(isAtivo)

//Outras formas de valores verdadeiros.

console.log(!!" ")
console.log(!!1)
console.log(!!(isAtivo = true))
console.log(!!true)
//Outras formas de valores falsos
console.log(!!"")
console.log(!!false)
console.log(!!0)
console.log(!!undefined)
console.log(!!(isAtivo=false))

/**
 * Forma de definição de valores padrões no javascript.
 * No exemplo abaixo, o valor que será atribuído é o valor válido: "Desconhecido"
 * */

console.log(("" || "Desconhecido"));