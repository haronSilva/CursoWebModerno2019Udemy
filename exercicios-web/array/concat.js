/**
 * Uso do método concat
 */

 const pais = ['Haron', 'Amanda']
 const filhos = ['Thomas', 'Flora']

 const familia = pais.concat(filhos)

 console.log(familia, pais, filhos)

 //Adicionando dinâmicamente com concat

 console.log([].concat([1,2],[3,4],[5,6]))