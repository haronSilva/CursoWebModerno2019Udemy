/**
 * Usando operador spread(espalhar) e rest(juntar)
 * usar o rest com parâmetro de função
 */

//Usar spread com objeto
const funcionario = {nome : 'Maria', salario: 12348.99}
const clone = {ativo: true, ...funcionario}

console.log(clone)

//Usar spread com array
const grupoA = ['João', 'Pedro', 'Gloria']
const grupoFinal = ['maria', 'rafaela', ...grupoA]

console.log(grupoFinal)