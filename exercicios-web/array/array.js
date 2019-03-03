/**
 * Arrays. No javascript ele é um objeto acessado através de índices
 * Ele tanto cresce como diminui de forma dinâmica
 */
console.log(typeof new Array)

let aprovados = new Array('Bia', 'José', 'Maria')

console.log(aprovados)

//Literal é o mais recomendado

aprovados = ['Bia', 'José', 'Maria']

aprovados.forEach(valor => console.log(valor))

aprovados.push('Berg')

console.log(`Tamanho do array é ${aprovados.length}`)

/**
 * Caso eu defina um valor em uma posição fora do tamanho do array
 * o javascript redimensiona e as posições não citadas ficarão com valores undefined.
 */

aprovados[9] = 'Jenifer'

console.log(aprovados[8] === undefined)

//Ordenação de arrays
aprovados.sort()
console.log(aprovados)

// Uma das maneiras de deletar posições de um array é usando o delete

delete aprovados[2]

//Método splice eu tanto consigo deletar como adicionar registros
//A partir do índice 1 retire 1 item apenas e acrescente após o ElementoNovo
aprovados.splice(1, 1, 'ElementoNovo')

console.log(aprovados)