/**
 * Criando meu próprio for each
 */
/**
 * Como o trecho Array.prototype retorna um objeto, o comando eu estou atrelando dinâmicamente
 * uma função para o objeto.
*/
Array.prototype.meuForeach = function(funcaoCallBack){
    for(let indice = 0; indice < this.length; indice++){
        funcaoCallBack(this[indice], indice, this)
    }
}

const aprovados = ['Haron', 'Amanda', 'Flora', 'THomas']

aprovados.meuForeach((nome, identificador) => console.log(`${identificador + 1}) ${nome}`))