/**
 * Aprendendo a usar o reduce - Responsável por retornar um valor conforme uma operação feita entre um acumulador
 * e o valor atual percorrido dentro do array. Além do parametro acumulador, vocẽ pode incluir o valor 
 * que iniciar essa iteração. 
 * 
 * RESUMINDO - Responsável por retornar somente UM valor dada uma estrutura
 */

 const alunos = [
     {nome :'João', nota :7.3, bolsista:false},
     {nome :'Maria', nota :9.2, bolsista:true},
     {nome :'Pedro', nota :9.8, bolsista:false},
     {nome :'Ana', nota :8.7, bolsista:true}
 ]
//Nesse caso o acumulador será o índice 0 e o valor atual será o índice 1 e isso continua
//até concluir o array
 const resultado = alunos.map(aluno => aluno.nota).reduce(function(acumulador, valorAtual){
    console.log(`Acumulador: ${acumulador} - Valor Atual: ${valorAtual}`)
    return acumulador + valorAtual
 })

 console.log(`Resultado: ${resultado}`)


 const resultadoComOutroValorInicial = alunos.map(aluno => aluno.nota).reduce(function(acumulador, valorAtual){
    console.log(`Acumulador: ${acumulador} - Valor Atual: ${valorAtual}`)
    return acumulador + valorAtual
 }, 10)

 console.log(`Resultado com Valor Inicial: ${resultadoComOutroValorInicial}`)