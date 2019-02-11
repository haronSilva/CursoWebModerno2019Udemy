/**
 * Estudo de função auto invocadas
 * 
 * IIFE - Immediately Invoked Function Expression
 */
/**
 * Com esses parênteses você escapa do escopo global e e todas variáveis definidas serão acessadas somente
 * dentro desse bloco
 */
 (
     function (){
         console.log('Será invocado na hora!')
         console.log('Foge do escopo mais abrangente')
     }
)()