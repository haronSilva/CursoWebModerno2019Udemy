/**
 * Continuando exercícios de herança com javascript
 * Acredito que seja assim a herança na prática!!
 * Padrão prototype chain
 */

function MeuObjeto (){
    this._valor = 40
    
}

function MeuObjetoFilho(){
    //this._valor = 20
    this.__proto__ = new MeuObjeto
}

const objFilho = new MeuObjetoFilho
console.log(objFilho._valor)

/**
 * Exemplos do curso
 */

const avo = {attr1: 'a'}
const pai = {__proto__: avo, attr2: 'b'}
const filho = {__proto__: pai, attr3: 'c'}
console.log(filho.attr1, filho.attr2)

const carro ={
    velAtual: 0,
    velMax: 200,
    aceleraMais(delta){
        if((this.velAtual + delta) <= this.velMax){
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },

    status(){
        return `${this.velAtual} Km/h de ${this.velMax} Km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324
}
//Uma nova forma de invocar atributos e métodos é o usando a palavra reservada 'super'
const volvo = {
    modelo: 'V40',
    status(){
        return `${this.modelo}: ${super.status()}`
    }
}

//Outra forma de definir um prototype
Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)
volvo.aceleraMais(100)
console.log(volvo.status())
ferrari.aceleraMais(130)
console.log(ferrari.status())