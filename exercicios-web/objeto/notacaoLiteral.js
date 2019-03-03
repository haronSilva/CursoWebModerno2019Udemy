/**
 * Melhoria vindas com Ecma script 2015
 */

 const a = 1
 const b = 2
 const c = 3
 //Declarar atributos sem a expressão chave - valor
 const obj = {
     a, b ,c
 }

 console.log(obj)

 //Atribuição de nome em string para propriedades dos objetos
 const atrNome = 'nome'
 const atrVlr ='Jeferson'
 const obj1 = {
     [atrNome] : atrVlr
 }

 console.log(obj1)

 //Nova forma para criação de funções para dentro dos objetos

 const obj3 = {
     funcao(){
         console.log('Função ecma script 2015')
     }
 }

 obj3.funcao()