/**
 * Como usar switch no javascript
 */

 const imprimirResultado = function(nota){
    switch(Math.floor(nota)){
        case 10: case 9: case 8: case 7:
            console.log('aprovado')
            break
        case 4: case 5: case 6:
            console.log('Recupecao')
            break
        case 0: case 1: case 2: case 3:
            console.log('Reprovado')
            break
        default:
            console.log('não é uma nota válida')    
    }
 }

imprimirResultado(8.6)
imprimirResultado(9.6)
imprimirResultado(5.6)