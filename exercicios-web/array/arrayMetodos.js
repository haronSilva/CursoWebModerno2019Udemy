/**
 * Métodos importantes do objeto Array
 */
const pilotos = ['pilot1', 'pilot2', 'pilot3', 'pilot4']

//remove o ultimo registro do array
pilotos.pop()
console.log(pilotos)
//Acrescenta no final
pilotos.push('pilot5')

console.log(pilotos)

//Remove o primeiro da lista
pilotos.shift()
console.log(pilotos)

//Adiciona na primeira posição

pilotos.unshift('pilot0')
console.log(pilotos)

//Retorna um novo array a partir do índice escolhido.
console.log(pilotos.slice(2))