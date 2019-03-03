/**
 * Exemplo de como fazer instâncias únicas
 */

module.exports = () => {
    return {
        valor : 1,
        inc(){
            this.valor++
        }
    }
}