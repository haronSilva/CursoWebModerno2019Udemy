/**
 * Realizando a entrada (teclado) e saída (monitor) com node
 * Para testar esse script será necessário executar o javascript pelo terminal
 * usando node 'script'.js -a
 */

const anonimo = process.argv.indexOf('-a') !== -1
console.log(anonimo)

//escrevendo no console.

if(anonimo){
    process.stdout.write('Fala Anonimo!\n')
    process.exit()
} else {
    //Realizar leitura do teclado e escrita
    process.stdout.write('Informe o seu nome: ')
    //esse evento é disparado ao cliclar em enter
    process.stdin.on('data', data => {
        const nome = data.toString().replace('\n', '')
        process.stdout.write(`Fala ${nome}!!!\n`)
        process.exit()
    })
}