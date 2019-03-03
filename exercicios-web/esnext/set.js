/**
 * Usando o set no javascript - Muito parecido com o set do java.
 * Não tem índice e nem aceita valores repetidos
 */

const times = new Set()
times.add('Vasco')
times.add('São Paulo').add('Palmeiras').add('Corinthias')
times.add('Flamengo')
times.add('Vasco') // esse carinha vai ser ignorada

console.log(times)
//Verificando se tem a chave
console.log(times.has('vasco'), times.has('Vasco'))
//Deletando
times.delete('Flamengo')
console.log(times.has('Flamengo'))

//Outra forma de definir um set
const nomes = ['George', 'Roger', 'Bruna', 'Roger']

const nomesSet = new Set(nomes)

console.log(nomesSet)

