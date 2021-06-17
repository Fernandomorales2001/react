// Objetos Literales

// Trabajan con pares de valores
// Se pueden anidar objetos dentro de objetos, funciones, metodos

const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 465565,
        lat: 56.64556,
        long: 456654
    }
};
//console.table({ persona });
//console.log({ persona });
console.log( persona );


// En caso de clonar un objeto :
/* 
Cuando se hace una asignacion de este tipo realmente no es el valor de la misma, sino la referencia al espacio en memoria de la variable
const persona2 = persona; Esta asignacion no se debe de hacer jamas, porque estamos haciendo la copia de la referencia
persona2.nombre = 'Peter';

Realmente modificamos el objeto en su posicion de memoria
 console.log( persona );
 console.log(persona2);
*/

// Para crear un clon lo mas sencillo es: 
// Usamos el operador spread para hacer un clon o extraer cada una de las propiedades y asiganarlas al nuevo objeto que se esta creando 
const persona2 = {...persona};
console.log( persona );
console.log(persona2);