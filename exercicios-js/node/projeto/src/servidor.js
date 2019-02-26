/**
 * Onde eu vou criar meu primeiro api com express
 */

const porta = 3003

const express = require('express')
const app = express()
const bancoDeDados = require('./bancoDeDados')
const bodyParser = require('body-parser')
/**
 * Traduzindo: Quando eu fizer um get com a uri Produtos, um callback
 * será disparado. Nesse caso vou retornar um response com um objeto que será
 * convertido em JSON
 */
/*app.get('/produtos',(request, response, next)=>{
    response.send({nome :'Notebook', preco: 123.45})
})*/
//Com o método use, qualquer requisição é interceptada
//e o urlencoded do body parse, resolverá o método post com a opção x-www-form-urlencoded do postman
app.use(bodyParser.urlencoded({extended: true}))

app.get('/produtos',(request, response, next)=>{
    response.send(bancoDeDados.getProdutos())
})

app.get('/produtos/:id',(request, response, next)=>{
    response.send(bancoDeDados.getProduto(request.params.id))
})
/**
 * É necessário instalar uma dependência para requisições POST, chamada body parser
 */
app.post('/novoProduto',(request, response, next)=>{
  const produto = bancoDeDados.salvarProduto({
      nome: request.body.nome,
      preco: request.body.preco
  })
  response.send(produto)
})

app.put('/alterarProduto/:id',(request, response, next)=>{
    const produto = bancoDeDados.salvarProduto({
        id: request.params.id,
        nome: request.body.nome,
        preco: request.body.preco
    })
  
  response.send(produto)
})

app.delete('/excluirProduto/:id',(request, response, next)=>{
  const produto = bancoDeDados.excluirProduto(request.params.id)  
  response.send(produto)
})

app.listen(porta,() => {
    console.log(`Servidor executando na porta ${porta}`)
})