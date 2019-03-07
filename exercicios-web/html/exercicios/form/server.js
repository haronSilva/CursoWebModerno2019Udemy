const express = require('express')

const api = express()
const bodyParser = require('body-parser')
const port = 3003

api.use(bodyParser.urlencoded({extended: true}))

api.post('/usuarios',(request, response, next)=>{
    const nome = request.body.nome
    console.log(request.body)
    console.log('Parabéns')
    response.send('Parabéns')
})

api.listen(port, () =>{
    console.log(`Rodando na porta ${port}`)
})