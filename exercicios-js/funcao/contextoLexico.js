/**
 * Exercicio para se preparar para closure. Contexto léxico = Contexto na qual a função foi escrita.
 * Nos exemplos abaixo, vimos que aquilo que fazemos referência o javascript tenta encontrar no contexto
 * atual se não encontrar, ele vai no contexto mais abrangente até encontrar!
 */

const valor = 'Global'

function minhaFuncao(){
    console.log(valor)
}

function exec(){
    const valor = 'Local'
    minhaFuncao()
}
/**
 * O resultado será global, pois no javascript toda função guardo consigo o seu contexto onde ela foi criada e não da onde ela chamada.
 * No exemplo acima o método minhaFuncao foi criada logo após a definição externa da variável valor, por isso
 * que o que mostrado no console foi Global. Isso vai ocorrer independente de onde ela foi chamada
 */
exec()
