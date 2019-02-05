/**
 * Estudo de if encadiado
 */

Number.prototype.entre = function(inicio, fim){
    return this >= inicio && this <=fim
}

const imprimirResultado = function(nota){
    if(nota.entre(7, 10)){
        console.log('Aprovado')
    } else if(nota.entre(4, 6)){
        console.log('Recuperação')
    } else {
        console.log('Reprovado')
    }
}

imprimirResultado(5)
imprimirResultado(0)
imprimirResultado(8)