/**
 *  Função  - Cidadão de primeira linha qunado eu passo uma função como dado de parâmetro 
 */

//Criar de forma literal

function func1(){

}

//Armazenar em uma variável
const func2 = function(){}

//Armazenar em um array
const array = [function(){}, func1, func2]

//Armazenar em um atributo de objeto
const obj = {}
obj.falar = function(){return 'opa'}
console.log(obj.falar())

//Passar função como param
function run(fun){
    fun()
}

run(function(){console.log("executando")})

// Uma função pode retornar/conter uma função

function soma(a, b){
    return function(c){
        console.log(a+b+c)
    }
}

soma(1,2)(3)

const tresMais = soma(1,2)
tresMais(3)