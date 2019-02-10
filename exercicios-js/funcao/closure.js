/**
 * Finalmente closure! Vamos aprender!
 * 
 * Closure é o escopo criado quando uma função é declarada
 * Esse escopo permite a função acessar e manipular variáveis externas a função
 */

const valor = 'Global'

function fora(){
    const valor = 'Local'
    function dentro(){
        return valor
    }

    return dentro
}
/**
 * Nesse exemplo o closure da função retornada, mostra que o valor que ela deve retornar é o valor Local,
 * uma vez que a declaração do método dentro foi logo após a definição da variável x.
 */
const minhaFuncao = fora()
console.log(minhaFuncao())