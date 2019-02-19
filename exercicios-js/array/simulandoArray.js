/**
 * Simulando array com objetos
 */

 const quaseArray = {0: 'Haron', 1:'Amanda', 2: 'THomas', 3:'Flora'}
 Object.defineProperty(quaseArray, 'toString',{
     value: function() {return Object.values(this)},
     enumerable:false
 })

 console.log(quaseArray[0])

 const meuArray = ['Haron', 'Amanda', 'Thomas', 'Flora']

 console.log(meuArray, quaseArray.toString())