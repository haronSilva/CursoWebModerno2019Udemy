/**
 * Como o javascript trabalha com get e set. A convenção que ele trabalha
 */
const sequencia ={
    _valor : 1 /*EM javascript os atributos privados recebem o _ antes da palavra */,
    get valor(){
        return this._valor++
    },

    set valor(valor){
        if( valor > this._valor){
            this._valor = valor
        }        
    }
}
//Ativando o  get
console.log(sequencia.valor, sequencia.valor)

//Ativando o set
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)

