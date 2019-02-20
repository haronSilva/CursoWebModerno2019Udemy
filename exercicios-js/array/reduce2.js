/**
 * Desafio - Todos os alunos são bolsitas?
 */

const alunos = [
    {nome :'João', nota :7.3, bolsista:false},
    {nome :'Maria', nota :9.2, bolsista:true},
    {nome :'Pedro', nota :9.8, bolsista:false},
    {nome :'Ana', nota :8.7, bolsista:true}
]

const extrairNotas = aluno => aluno.bolsista
const todoSaoBolsistas = alunos.map(extrairNotas).reduce((acumulado, valorAtual) => acumulado && valorAtual)
const existeAlunoBolsista = alunos.map(extrairNotas).reduce((acumulado, valorAtual) => acumulado || valorAtual)
console.log(todoSaoBolsistas , existeAlunoBolsista)