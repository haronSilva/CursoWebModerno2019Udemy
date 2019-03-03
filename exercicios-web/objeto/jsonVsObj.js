/**
 * Diferenças entre JSON e Objetos
 */

 const obj = {a : 1, b : 2, c :3 , soma(){return a+b+c}}

 //Convertendo Objetos para JSON
 /**
  * PS: Como json é representa dados, as funções não serão consideradas
  */
 console.log(JSON.stringify(obj))

 /**
  * Convertendo JSON para objeto
  */

  console.log(JSON.parse('{"a": 1, "b":"teste"}'))
