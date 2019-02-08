/**
 * Contexto do 'This' usando bind
 */

const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar()

const falar = pessoa.falar
falar()//Nesse momento estou atribuindo somente a função e contexto mudou onde não existe o atributo saudacao.

//uso do bind para que o this possa ser representado, por pessoa.
const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()