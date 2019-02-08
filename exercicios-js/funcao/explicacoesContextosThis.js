/**
 * A palavra reservada 'This' pode ter diversos contextos dentro do mundo javascript:
 * 1. Quando chamada dentro de uma function o 'This' irá representar aquele que o chamou, exemplo:
 * ao criar uma function no console do browser o this será o objeto window.
 * 2. Caso eu atribua a função a um evento de algum componente, como por exmeplo, body. O 'This' será o body.
 * 3. Para o arrow function isso já muda. O 'This' será sempre onde foi definido. Se for no contexto gobal sempre será o window(caso seja no browser)
 * Se for em um controller, sempre será no controller. Dessa forma não há variação.
 */