/**
 * Problema histórico do javascript ao usar o VAR - Escopo Global
 * Pelo fato de ser escopo global, a variável i sempre  ficará com o valor sendo sobrescrito
 * conforma quantidade de iterações, até chega o ultimo valor.
 */
var funcs = []
for(var i = 0; i < 10; i++){
    funcs.push(function(){
        console.log(i)
    })
}

funcs[1]()
funcs[4]()