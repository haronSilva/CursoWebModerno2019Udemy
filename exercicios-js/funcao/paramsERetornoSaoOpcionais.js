/**
 * Javascript é tão variável que aceita em uma mesmo método ter retorno ou não
 * Ele também aceita passar multiplos parametros, mesmo que eu não tenha definido.
 */

 function area(largura, altura){
     const area = largura * altura
     if(area > 20){
         console.log(`Valor acima do permitido: ${area}m2.`)
     } else {
         return area
     }
 }


 console.log(area(2,2))
 /**
  * Na função abaixo ele retorna undefined,  porque como foi definido retorno, ele também precisa classifica
  * quando não retornar nada!
 */
 console.log(area(5,5))