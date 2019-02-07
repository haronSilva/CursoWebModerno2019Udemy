/**
 * Como setar uma variável padrão.
 */
// 1ª Estratégia
 function soma(a , b, c){
     a = a || 1
     b = b || 1
     c = c || 1

     return a + b + c
 }

 console.log(soma(), soma(1,2,3))
 //A estratégia falha nesse exemplo
 console.log(soma(0,0,0))

//2ª Estratégia
 function soma2(a, b, c){
     a = a!== undefined ? a : 1
     //SE existe o índice 1 dentro do array arguments
     b = 1 in arguments ? b : 1
    //Solução mais robusta!
     c = isNaN(c) ? 1 : c

     return a + b + c 
 }
 
 console.log(soma2(), soma2(1,2,3), soma2(0,0,0))

 //Estratégia Ecma 2015
 function soma3(a=1, b=1, c=1){
     return a+b+c
 }

 console.log(soma3(), soma3(1,2,3), soma3(0,0,0))