/**
 * Realizar uma requisição com node
 */

const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
//Axious é um client http para requisições
const axious = require('axios')


axious.get(url).then(response => {
   const funcionarios = response.data    
   const  mulheresChinesas = funcionario => funcionario.genero == 'F' && funcionario.pais =='China'
   const menorSalario = (funcionarioAtual, funcionarioSeguinte) => funcionarioAtual.salario - funcionarioSeguinte.salario
   const mulherMenorSalario = (funcionarioAtual, funcionarioSeguinte) => funcionarioAtual.salario > funcionarioSeguinte.salario ? funcionarioSeguinte : funcionarioAtual
   const mulheresChinesasOrdenadasMenorSalario = funcionarios.filter(mulheresChinesas).sort(menorSalario)
   const mulherChinesaMenorSalario = mulheresChinesasOrdenadasMenorSalario[0]
  // console.log(mulheresChinesasOrdenadasMenorSalario)
   console.log(mulherChinesaMenorSalario)
   //O instrutor usou a estratégia com o reduce
   console.log(funcionarios.filter(mulheresChinesas).reduce(mulherMenorSalario))


})

//Desafio : Selecionar a mulher chinesa com o menor salário


