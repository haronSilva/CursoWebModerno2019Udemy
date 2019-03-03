/**
 * Continuando exercício com o padrão de projeto factory em javascript
 */
//Método factory
function criarProduto(nome, preco){
    return {
        nome,
        preco
    }
}

const prodSabao = criarProduto('Omo', 7.50)
console.log(prodSabao)

 //Criando objetos com construtores
 function Produto(nomeProduto, precoProduto){
     let nome = nomeProduto
     let preco = precoProduto

     this.getNome = function(){
         return nome
     }

     this.getPreco = function(){
         return preco
     }
 }

 const macarrao = new Produto('Macarrão', 2.50)
 console.log(macarrao)