/**
 * Entendo e praticando callback no javascript. Padrão de projeto
 * bastante utilizado nesse conceito é OBSERVER. O conceito do callback é eu passar uma função
 * por parâmetro e a  mesma pode ser chamada em qualquer determinado evento ( uma vez ou mais de uma vez,
 * dependendo da sua lógica)
 */

const fabricantes = ["Mercedes", "Audi", "FIAT"]

const imprimirItem = function (nome, indice){
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimirItem)

//Usando arrow function
fabricantes.forEach(fabricante=>console.log(fabricante))