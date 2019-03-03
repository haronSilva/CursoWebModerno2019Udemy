/**
 * Chain of responsability:  Cadeia de responsabilidade é um padrão de projeto onde a minha implementação
 * não é fortemente acoplada, quando se divide em várias funcionalidades. Somente a cadeia vai conhecer
 * o próximo passo a ser executado. Dessa forma, é possível executar n combinações de funcionaldiade sem
 * que o código saiba quem será o próximo a ser executado - Express.js usa muito isso
 */

const passo1 = (contexto, proximoPasso) => {
    contexto.valor1 = 'middleware1'
    proximoPasso()
}

const passo2 = (contexto, proximoPasso) => {
    contexto.valor2 = 'middleware2'
    proximoPasso()
}

const passo3 = contexto => contexto.valor3 = 'middleware3'
/**
 * Dessa forma eu posso colocar minha funções na ordem que eu quiser e serão executado
 * sem saber quem chama quem, mas a cadeira sabe quem ele deve chamar
 * @param {} contexto 
 * @param  {...any} middlewares 
 */
const exec = (contexto, ...middlewares) =>{
    const execPasso = indice =>{
        middlewares && indice < middlewares.length &&
        middlewares[indice](contexto, () => execPasso(indice+1))
    }

    execPasso(0)    
}

const ctx = {}
exec(ctx, passo1, passo2, passo3)
console.log(ctx)

const ctx1 = {}
exec(ctx1, passo2, passo1, passo3)
console.log(ctx1)

const ctx2 = {}
exec(ctx2, passo3, passo1, passo2)
console.log(ctx2)
