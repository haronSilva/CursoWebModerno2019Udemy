/**
 * O conceito de escopo para as variáveis usando é bem diferente
 * no exemplo abaixo, a variável é enxergada mesmo sendo definida dentro de vários blocos
 * 
 * Quando você cria uma variável VAR fora de uma função ela terá um escopo global
 * Isso pode acarreta uma grande problema caso outra pessoa defina a mesma variável com o tipo diferente
 * e o javascript automaticamente sobrescreve o valor, pelo fato de ser global, e isso pode ocasionar bugs
 */

 {
     {
         {
             var variavel = "visivel?"
         }
     }
 }

 console.log(variavel)
/**
 * No exemplo abaixo mostra uma exceção que o var não é acessado quando estiver dentro de função
 * somente para referencias dentro do escopo da função
 */
 function funcao(){
     var variavelV = "realmente visivel?"
 }
funcao()
 console.log(variavelV)