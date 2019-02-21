/**
 * Implementando o meu reduce
 */

Array.prototype.meuReduce = function (callBack, valorInicial){
    let valorAcumulado = valorInicial ? valorInicial : null

    for(let i = 0; i < this.length; i++){
        if(valorAcumulado == null){
            valorAcumulado = this[i]
            valorAcumulado = callBack(valorAcumulado, this[i + 1], i, this)
        } else {
            valorAcumulado = callBack(valorAcumulado, this[i], i, this)
        }
    }

    return valorAcumulado
}

const alunos = [
    {nome :'João', nota :7.3, bolsista:false},
    {nome :'Maria', nota :9.2, bolsista:true},
    {nome :'Pedro', nota :9.8, bolsista:false},
    {nome :'Ana', nota :8.7, bolsista:true}
]

const extrairNotas = aluno => aluno.bolsista
const todoSaoBolsistas = alunos.map(extrairNotas).meuReduce((acumulado, valorAtual) => acumulado && valorAtual)
const existeAlunoBolsista = alunos.map(extrairNotas).meuReduce((acumulado, valorAtual) => acumulado || valorAtual)
console.log(todoSaoBolsistas , existeAlunoBolsista)