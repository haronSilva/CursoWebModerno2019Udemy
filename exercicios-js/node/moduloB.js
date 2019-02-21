/**
 * Continuando os exemplos de exportação de módulos no node
 */

//A forma mais comum de exportar um módulo
//Essa estratégia só pode ser usada com module.exports
module.exports = {
    bomDia: 'Bom dia',
    ola(){
        return 'Ola'
    }
}