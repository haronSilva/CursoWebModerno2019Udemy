/**
 * Imperativo Vs Declarativa
 * -> Imperativo - Você codifica em detalhes, sem nenhum nível de abstração ou algo encapsulado
 * -> Declarativo - Você codifica focando no que tem que ser feito, levando em consideração o uso de métodos
 * A estratégia declarativa lhe motivo a ter reuso de código
 */

const alunos = [
    {nome :'João', nota :7.3, bolsista:false},
    {nome :'Maria', nota :9.2, bolsista:true},
    {nome :'Pedro', nota :9.8, bolsista:false},
    {nome :'Ana', nota :8.7, bolsista:true}
]

//Abordagem Imperativo
let total1 = 0

for(let i = 0; i < alunos.length; i++){
    total1 += alunos[i].nota
}

console.log(total1 / alunos.length)

//Abordagem Declarativa
const getNota = aluno => aluno.nota
const soma = (total, atual) => total + atual
const total2 = alunos.map(getNota).reduce(soma)
console.log(total2 / alunos.length)