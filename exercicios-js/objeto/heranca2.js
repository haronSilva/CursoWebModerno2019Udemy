/**
 * Continuando exercícios de herança com javascript
 * Acredito que seja assim a herança na prática!!
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