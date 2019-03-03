/**
 * 
 * Estudo do if com else
 */
const imprimirResultado = function(nota){
    if(nota>=7){
        console.log('Aprovado')
    } else {
        console.log('Reprovado')
    }
}

imprimirResultado(10)
imprimirResultado(4)
imprimirResultado('EPA')//Atenção para a questão de tratamento para somente número