/**
 * Usando o map - muito parecido com o hashMap do Java
 * E a chave não pode ter recepção
 */

const tecnologias = new Map()
tecnologias.set('react', {framework: false})
tecnologias.set('angular', {framework: true})

console.log(tecnologias.get('react'))

//Outra forma de definição
const chaves = new Map([
    ['chave1', 1],
    ['chave2', 2]
])

console.log(chaves.get('chave1'))

//Método que verifica se o que eu to pesquisando existe dentro do map

console.log(chaves.has('chave1'))

//Tamanho do map
console.log(chaves.size)
//Deletando uma chave
console.log(chaves.delete('chave1'))
console.log(chaves.has('chave1'))