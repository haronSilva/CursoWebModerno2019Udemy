const express = require('express')

const api = express()
const bodyParser = require('body-parser')
const port = 3003

api.use(bodyParser.urlencoded({extended: true}))

api.post('/usuarios',(request, response, next)=>{
    const nome = request.body.nome
    console.log(request.body)
    console.log('Parabéns')
    response.send('Parabéns usuário Incluído')
})

api.post('/usuarios/:id',(request, response, next)=>{
    const id = request.params.id
    console.log(id)
    console.log('Parabéns')
    console.log(request.body)
    response.send('Parabéns usuário Alterado')
})

api.listen(port, () =>{
    console.log(`Rodando na porta ${port}`)
})