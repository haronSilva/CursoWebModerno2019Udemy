/**
 * Criar uma função construtora para criação de objetos Pessoa
 */

function Pessoa(nomePessoa){
    let nome = nomePessoa

    this.falar = function(){
        console.log(`Meu nome é ${nome}`)
    }
}

const pess1 = new Pessoa('Jefersson')
pess1.falar()