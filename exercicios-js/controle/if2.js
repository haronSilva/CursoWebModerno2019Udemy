/**
 * Outra forma de usar o if
 */

function funcao(valor){
    if(valor >= 7)
        console.log(valor)

    console.log("finally")    
}

funcao(20)

function teste2(num){
    if(num > 7);{// cuidado com o ';', não usar em bloco if. Pois é um trecho de código válido.
        console.log(num)
    }
}

teste2(1)
teste2(2)