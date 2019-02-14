/**
 * Cotninuando o estudo de herança.
 * Usando o método Object.create para criar e realizar herança com outro objeto
 */

const pai = {nome : 'Haron', corCabelo: 'preto'}

const filha1 = Object.create(pai)
filha1.nome = 'Flora'

//No exemplo abaixo, eu vou definir a relação de herança e ainda especificar mais atributos
const filha2 = Object.create(pai, {
    nome : {/*Aqui são as propriedade do atributo*/ value: 'Bia',writable: false, enumerable:true}

})

console.log(filha2.nome)

//Novo método para verificar se o atributo pertence ao próprio objeto ou ao seu pai
for(let key in filha2){
    filha2.hasOwnProperty(key) ? console.log(key) : console.log(`É da minha herança: ${key}`)
}