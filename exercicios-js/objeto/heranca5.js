/**
 * Aprendendo como os objetos proprietários da linguagem, funcionam!
 * Os tipo como String, Array e Object são funções. Dessa forma, eu poderei incluir 
 * funções customizadas e usar esse recurso em meu software.
 */

//Na string não existe esse método, mas acrescentando agora eu posso habilita-la e usa-la normalmente.
//Função responsável por reverter uma string.
 String.prototype.reverse = function (){
    //Nesse contexto, o this representará a instancia do componente String
    //split - quebro em um array pelo '', ordeno de forma decrescente e transforma em string novamente.
    return this.split('').reverse().join('')
 }

 console.log('Haron'.reverse())

 Array.prototype.first = function (){
     return this[0]
 }

 console.log([1,2,3].first())