/**
 * Uso dos parâmetros variáveis. Versão anterior ao ecma 2015 e após a versão.
 */

function soma(){
    let soma=0;
    //arguments contém todas os parâmetros informados na função
    for(i in arguments){
        soma += arguments[i]
    }

    return soma
}

console.log(soma())
console.log(soma(1,2,4))
console.log(soma('teste',1))