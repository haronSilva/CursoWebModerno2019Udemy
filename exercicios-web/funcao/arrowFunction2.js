/**
 * Continuando as forma de uso e contexto com arrow function e a palavra reservada This
 */

function Pessoa(){
    this.idade = 0

    setInterval(()=>{
        this.idade++
        console.log(this.idade)
    }, 1000)
}

new Pessoa