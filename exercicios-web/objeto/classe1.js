/**
 * Vamos brincar com classes no javascript
 */

//Classe que no final das contas vira uma função construtora
class Lancamento {
    constructor(nome = 'Genérico', valor = 0){
        this.nome = nome
        this.valor = valor
    }
}

class CicloFinanceiro {
    constructor(ano, mes){
        this.ano = ano;
        this.mes = mes
        this.lancamentos = []
    }
    //Os 3 pontos é uma notação para representar parâmetros variáveis
    addLancamentos(...lancamentos){
        lancamentos.forEach(l => this.lancamentos.push(l))
    }

    sumario(){
        let valorConsolidado = 0
        this.lancamentos.forEach(l => {
            valorConsolidado += l.valor
            
        })
        return valorConsolidado
    }
}

const salario = new Lancamento('Salário', 6000)
const contaDeLuz = new Lancamento('Conta de Luz', -100)

const conta = new CicloFinanceiro(2019,2)
conta.addLancamentos(salario, contaDeLuz)
console.log(conta.sumario())