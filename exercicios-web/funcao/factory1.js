/**
 * Padrão de projeto factory no javascript
 * Factory é uma função que sempre irá retornar um objeto
 */

 function criarPessoa(nome, idade){
     return {
        nome : nome,
        idade: idade
     }
 }

 const objPai = criarPessoa('Haron', 31)
 const objMae = criarPessoa('Amanda', 31)
 const objFilho = criarPessoa('Thomas', 3)
 const objFilha = criarPessoa('Flora', 1)

 console.log(objPai, objMae, objFilho, objFilha)