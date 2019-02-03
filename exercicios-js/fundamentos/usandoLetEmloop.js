/**
 * como o let é usado em escopo de bloco, quando é executado a instrução para imprimir 
 * a variável i, o sistema não reconhece.
 */
for(let i = 0; i<10;i++){
    console.log(i);
}

console.log(i)