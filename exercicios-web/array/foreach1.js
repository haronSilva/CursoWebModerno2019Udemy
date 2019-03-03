/**
 * Percorrendo um array com o foreach
 *
 */

const aprovados = ['Haron', 'Amanda', 'Thomas', 'Flora']
//Além do valor e índice o foreach você pode passar o parãmetro array
aprovados.forEach(function(valor, indice){
    console.log(`${indice + 1}) ${valor}`)
})

//Criando o callback para depois incluir no foreach
const exibirAprovados = aprovado => console.log(aprovado)

aprovados.forEach(exibirAprovados)