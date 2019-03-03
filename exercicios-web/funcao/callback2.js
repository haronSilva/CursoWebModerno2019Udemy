/**
 * Vendo a facilidade do uso do callback vs a dificultade de não usa-lo
 */
const notas = [1 , 2 ,3 ,4, 5, 6, 10]

let notasBaixas = []
//Estratégia sem callback
for( i in notas){
    if(notas[i] < 5){
        notasBaixas.push(notas[i])
    }
}

console.log(notasBaixas)

// Estratégia com callback
/**
 * Nessa estratégia, para cada iteração, a variável nota terá o valor de cada posição do array 
 * e será feita a verificação se é verdadeiro ou falso. Se atender a condição automáticamente 
 * outro array será criado e devolvido após a execução do filter sem alterar o array alvo.
 */
notasBaixas = notas.filter(function (nota){
    return nota < 5
})

console.log(notasBaixas)

//Callback mais enxuto

notasBaixas = notas.filter(nota => nota < 5)
console.log(notasBaixas)