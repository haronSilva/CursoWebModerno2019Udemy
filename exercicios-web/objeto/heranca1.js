/**
 * Herança na prática com javascript
 */

 const ferrari = {
     modelo : 'F40',
     velMax : 324
 }

 const volvo = {
     modelo : 'V40',
     velMax : 200
 }

 //Através do atributo proto eu consigo acessar o Pai do objeto
 console.log(ferrari.__proto__)
 console.log(volvo.__proto__)
 console.log(ferrari.__proto__ === Object.prototype)