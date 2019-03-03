/**
 * Revisão de objetos
 */

//Acrescentando atributos dinamicamente em um objeto
const produto = new Object
produto.nome = 'Cadeira'
produto['marca'] = 'Generica'
console.log(produto)

//exclusão de atributos do objeto
delete produto.marca
console.log(produto)

//objetos encadiados

const obj = {
    obj2 : {
        atr1 : 'assss',
        obj3: {
            atr2 : '123'
        }
    }
}

console.log(obj.obj2.obj3.atr2)