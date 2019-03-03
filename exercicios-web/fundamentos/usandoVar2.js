/**
 * Para VAR existem dois escopos: Global - Fora de function e 'Local' dentro de function
 */
var numero = 1
 {
     {
        var numero = 2
        console.log("dentro: "+numero)
     }
 }

 console.log('fora: '+numero)