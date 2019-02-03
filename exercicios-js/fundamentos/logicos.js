/**
 * Como usar os operadores lógicos com javascript
 * Situação Problema: 
 * Tenho dois freelancers a serem desenvolvidos. Se eu concluir os dois eu compro
 * uma tv de 50 se somente concluir um eu compro uma tv de 32. Nos exemplos anteriores eu 
 * poderei tomar sorvete, exceto se eu não conseguir terminar nenhum trabalho.
 */

function projFds(trabalho1, trabalho2){
    const comprarTv50 = trabalho1 && trabalho2
    const comprarTv32 = trabalho1 != trabalho2
    const tomarSorvete = trabalho1 || trabalho2
    const ficarEmCasa = !trabalho1 && !trabalho2
    //Novo recurso do EcmaScript 2015, para definir um objeto não é necessário ter chave - valor
    return {comprarTv50, comprarTv32, tomarSorvete, ficarEmCasa}
}

console.log(projFds(true, true))
console.log(projFds(false, true))
console.log(projFds(false, false))