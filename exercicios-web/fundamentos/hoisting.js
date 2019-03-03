/**
 * Hoisting é um conceito onde o javascript pega uma variavel VAR e a declara mesmo que ela
 * tenha sido chamada antes de sua declaração, sem dar erro de compilação
 * exemplo abaixo. Isso não acontece com LET
 */

 console.log(a)
 var a=2
 console.log(a)