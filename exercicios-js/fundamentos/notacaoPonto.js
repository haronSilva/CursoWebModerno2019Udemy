/**
 * Com a notação ponto é possível fazer o acesso aos atributos dentro de um objeto.
 */

 const obje = {
     nome:"haron"
 }
 console.log(obje.nome)

 function Obj(nome){
    //O this indica que quem instanciar essa function terá acesso ao atributo nome.
    this.nome = nome
    // Da mesma forma para functions para serem expostas
    this.funcao = function(){
        console.log("função")
    }
 }
 console.log(new Obj("Haron").nome)
 let aObj = new Obj("Amanda")
 console.log(aObj.nome)
 aObj.funcao()
 

