/**
 * Outro uso do contexto 'This' usando bind e usando a técnica Self
 */

function Pessoa() {
    this.idade = 0
    //Técnica Self
    const self = this
    setInterval(function(){
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/, 1000)

} 

new Pessoa
