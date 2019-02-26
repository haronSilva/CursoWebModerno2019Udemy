/**
 * Criando jobs temporizado no node
 */
const schedule = require('node-schedule')
/**
 * Rode de 5 em 5 segundo, não importando os minutos
 * as 14h de qualquer dia, qualquer mês, na terça feira
 * */
const tarefa1 = schedule.scheduleJob('*/5 * 14 * * 2', function(){
    console.log('Executando Tarefa 1!', new Date().getSeconds())
})

setTimeout(function(){
    tarefa1.cancel()
    console.log('Cancelando tarefa 1')
}, 20000)

//Criando regras para temporizador de outra forma.
const regra = new schedule.RecurrenceRule()
//Rodando de segunda a sexta
regra.dayOfWeek = [new schedule.Range(1, 5)]
//na hora 14
regra.hour=14
//No segundo 30
regra.second=30

const tarefa2 = schedule.scheduleJob(regra, function(){
    console.log('Executando Tarefa 2!', new Date().getSeconds())
})

