/**
 * Como se escreve uma função arrow comparado a forma antiga.
 */
//Forma antiga
 let dobro = function (a){
     return 2 * a
 }

 //Arrow function retorno explícito

 dobro = a => {
     return 2 * a
 }

 // Arrow function retorno implícito

 dobro = a => 2 * a

 // Definição de função sem parâmetros

 let ola = function (){
     return 'olá'
 }

 // Arrow function

 ola = () => 'olá'

