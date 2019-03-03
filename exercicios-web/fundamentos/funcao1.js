//Função sem retorno

function imprimirSomar(a, b){
    console.log(a + b)
}

imprimirSomar(1, 2)

//Quando você não passa um parâmetro, é capaz de somar um valor com undefined que resulta um NaN
imprimirSomar(1)

/**
 * Caso eu passe n valores por parâmetro, no javascript não vai acontecer problema de compilação
 * e sempre vai usar os dois primeiros valores, conforme a definição da função acima.
 * */

 imprimirSomar(1,2,3,4,5)

 //Função com retorno
 /**
  * Na versão do ecma script 2015, eu posso definir um valor padrão para parâmetros de funções usando
  * a notação param = valor
  */
 function soma(a, b=0){
     return a + b
 }

 console.log(soma(2, 3))
 console.log(soma(2))