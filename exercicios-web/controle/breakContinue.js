/**
 * Break e Continue
 * break sai do laço corrente
 * continue ele vai para próxima iteração
 * Rótulos não é uma boa prática
 */

 const nums = [1,2,3,4,5,6,7, 8,9,10]

 for(x in nums){
     if(x == 3){
        break
     } 
     console.log(`${x} = ${nums[x]}`)
 }

 for(y in nums){
    if(y == 3){
       continue
    } 
    console.log(`${y} = ${nums[y]}`)
}