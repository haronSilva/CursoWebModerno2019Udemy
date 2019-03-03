/**
 * Uso do for in : Aqui eu recebo o índice de um array, para posteriormente
 * acessa-lo. Para objetos ele retorna a descrição do atributo para acessar via [] um objeto
 */

const notas = [1, 2, 3, 4, 5, 6, 7]

for(let i in notas){
    console.log(i, notas[i])
}


const pessoa = {
    nome: 'haron',
    idade: 31
}

for(let atributo in pessoa){
    console.log(`atributo= ${atributo} - valor= ${pessoa[atributo]}`)
}