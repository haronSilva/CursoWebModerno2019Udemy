/**
 * Certifica se com arrow functions a palavra reservada This muda, caso eu 
 * coloque um outro objeto através do bind
 */

let comparaComThis = function (param){
    console.log(this === param)
}

comparaComThis(global)

//Mudando o contexto do this com bind

const obj = {}

comparaComThis = comparaComThis.bind(obj)
comparaComThis(obj)
comparaComThis(global)

/**
 * Agora com arrow. Nesse caso ele é referenciado para o module.exports. Que no node toda arrow function
 * se não definida dentro de uma função, ela vai referênciar a esse module.
 * Mesmo eu fazendo um bind, o arrow function mantém a referência do objeto
 *  */

let comparaComThisArrow = param => console.log(`A setença é ${this === param}.`)
comparaComThisArrow(global)
comparaComThisArrow(module.exports)

function Haron () {
    this.comparaComThisArrow = (param) =>{
        console.log(this === param)
    }
}

let x = new Haron()
x.comparaComThisArrow(x)