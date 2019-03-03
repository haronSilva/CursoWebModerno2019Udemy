/**
 * Tratamento de exceções com javascript
 */

function tartarExcecao(erro){
    //throw 'mensagem de erro'
    throw new Error("mensagem de erro tratada")
}

function funcaoTratamento(obj){
    try{
        console.log(obj.name.toUpperCase()+'!!!')
    }catch(e){
        tartarExcecao(e)
    }finally{
        console.log("final")
    }

    
}

funcaoTratamento({nome: 'Haron'})