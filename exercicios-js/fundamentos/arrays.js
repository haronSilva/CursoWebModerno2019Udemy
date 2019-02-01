/**
 * Tudo sobre arrays em javascript
 */
//Definição
 const variavelArray = [1,2,3,4,5]

 console.log(variavelArray[0], variavelArray[1])

 //undefined - Quando acesso uma posição que não existe.
 console.log(variavelArray[10])

 //Limpa o elemento, mas mantem o tamanho do array
 delete variavelArray[0]
 console.log(variavelArray)
 //Limpa o elemento, mas não mantem o tamanho do array
 variavelArray.pop(1);
 console.log(variavelArray)