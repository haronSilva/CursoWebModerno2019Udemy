/**
 * Exercitando com funções anonimas
 */

const soma = function(a, b ){
    return a + b
}

const subtracao = function (a, b){
    return a-b
}

const multiplicacao = function (a, b){
    return a * b
}

const divisao = function (a, b){
    return a / b
}

const imprimirResultado = function (a, b, operacao = soma){
    console.log(operacao(a, b))
}

imprimirResultado(1,1)
imprimirResultado(1, 1 , subtracao)
imprimirResultado(1, 1 , multiplicacao)
imprimirResultado(1, 1 , divisao)
imprimirResultado(2, 2 , (x , y) => ((x*y)+2))

//Funções anonimas em objetos

const obj = {
    falar : function (){
        console.log('ola!')
    },
    /*Arrow sempre será uma função anônima */
    falarArrow : () => console.log('elo')
}

obj.falar()
obj.falarArrow()
