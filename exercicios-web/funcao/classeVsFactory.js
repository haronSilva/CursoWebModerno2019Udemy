/**
 * Comparativo de classe e factory
 */
//Criando uma classe - Funcionalidade disponibilizada no Ecma script 2015
/**
 * Para essa abordagem rodando no browser o this, infelizmente assumirá o componente window então ela não vai 
 * conseguir acessar o atributo nome.
 */
class Pessoa{
    constructor(nome){
        this.nome = nome
    }

    falar(){
        console.log(`Meu nome é ${this.nome}`)
    }
    
}

const pess = new Pessoa('Amanda')
pess.falar()
/**
 * Essa abordagem rodando no browser, o mesmo é executado com sucesso pois o atributo nome é conhecido e
 * dessa forma ele mostrará o nome correto.
 * @param {} nome 
 */
const criarPessoa = nome => {
    return {
        falar : () => console.log(`Meu nome é ${nome}`) 
    }
}

const pess2 = criarPessoa('Haron')
pess2.falar()