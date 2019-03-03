/**
 * Revisão forma de criação de objeto.
 */

 //criação literal
 const novoObj = {

 }

 //Object em JS
 const obj2 = new Object

 //Funções construtoras

 function Pessoa(nome, idade){
     this.nome = nome
     this.getIdade = () => idade
 }
 const haron = new Pessoa('Haron', 31)
 console.log(haron)
 console.log(haron.getIdade())

 //Funções factory

 const criarPessoa = (nome, idade) => {
    return {nome, idade}
    }
 const haron1  = criarPessoa('haron', 31)
 const amanda = criarPessoa('amanda', 31)
 console.log(haron1, amanda)

 //Object.create
 const filha = Object.create(null)
 filha.nome = 'Flora'
 console.log(filha)

 // Json.parse
 const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
 console.log(fromJSON)
