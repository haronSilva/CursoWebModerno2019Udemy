/**
 * Novo mecanismo de iteração de array - for of
 */

for (let letra of 'cod3r'){
    console.log(` -> ${letra}`)
}

const assuntosEcma = ['Set', 'Map', 'Promisse']

for (let assunto of assuntosEcma){
    console.log(assunto)
}

const assuntosMap = new Map([
    ['Map', {abordado : true}],
    ['Set', {abordado: true}],
    ['Promisse', {abordado: false}]
])

for (let subject of assuntosMap){
    console.log(subject)
}

//Somente chaves
for (let chaves of assuntosMap.keys()){
    console.log(chaves)
}

//Somente valores
for (let valores of assuntosMap.values()){
    console.log(valores)
}

//As entries - chave e valor - usando destructuring

for (let [ch, vl] of assuntosMap.entries()){
    console.log(ch, vl)
} 