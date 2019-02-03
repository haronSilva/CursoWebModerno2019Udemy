/**
 * Nesse caso, com o let ele vai permanecer um valor único para cada iteração,
 * por causa que o let respeita o escopo de função.
 */
const funcs = []
for(let i = 0; i < 10; i++){
    funcs.push(function(){
        console.log(i)
    })
}

funcs[1]()
funcs[4]()