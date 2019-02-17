/**
 * Simulando herança com função normal
 */

function Aula(nome, id){
    this.nome = nome
    this.id=id
}

//Cada instancia.__proto__ será === Aula.prototype
const aula1 = new Aula('Aula1',1)
const aula2 = new Aula('aula2', 2)

//Simulando um new com uma função normal.
/**
 * 
 * @param {*} f = function
 * @param  {...any} params - array de params como os atributos de um objeto 
 */
function novo(f, ...params){
    const obj = {}
    obj.__proto__ = f.prototype
    f.apply(obj, params)
    return obj
}

console.log(novo(Aula, 'NovaAula1', 3), novo(Aula, 'NovaAula2', 4))