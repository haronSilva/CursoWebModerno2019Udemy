/**
 * Usando promises. Uma forma de chamada assincrona que correponde
 * em sucesso ou falha ao executar uma promessa de chamada...
 */

 function falarDepoisDe(segundos, frase){
     return new Promise((resolve, reject) =>{
         setTimeout(()=>{
             //resolve(frase)
             reject(frase)
         }, segundos * 1000)
     })
 }
//tratando o resolve usa o then e reject em catch
 falarDepoisDe(3, 'Que Legal').then(frase => console.log(frase)).catch(frase => console.log(frase))