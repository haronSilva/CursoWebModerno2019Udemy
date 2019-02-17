/**
 * Herança em Classe
 */

class TesteHeranca{
    constructor(){
        this.atributo = 10
    }
    
}

class TesteHerancaFilho extends TesteHeranca {
    
}

console.log((new TesteHerancaFilho).atributo)


//Exemplo Udemy

class Avo {
    constructor(sobrenome){
        this.sobrenome = sobrenome
    }
}

class Pai extends Avo {
    constructor(sobrenome, profissao){
        super(sobrenome)
        this.profissao = profissao
    }
}

console.log(new Pai('Silva', 'Analista'))