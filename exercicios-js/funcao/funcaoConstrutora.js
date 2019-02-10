/**
 * Como criar uma função construtora
 */

function Carro(velocidadeMaxima = 200, delta = 5){
    //variáveis privadas no javascript - Forma de não conseguir acessa-las de fora.
    let velocidadeAtual = 0
    
    //Método público que poderá ser acessado de fora!
    this.acelerar = function (){
        if(velocidadeAtual + delta <= velocidadeMaxima){
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }

    //método get velocidadeAtual - Método público
    this.getVelocidadeAtual = function (){
        return velocidadeAtual
    }

    //método privado
    let getMetodoPrivado = function(){
        console.log("metodo privado")
    }
}

const uno = new Carro
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(350, 20)
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())
