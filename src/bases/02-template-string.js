// Template String

// Concatenar String, Poner variables dentro de strings o resultados de operaciones, caracteres multilinea o el nuevo String multilinea

const nombre = 'Fernando';
const apellido = 'Morales';

//const nombreCompleto = nombre + ' ' + apellido;

const nombreCompleto = `${ nombre } ${ apellido } ${ 1 + 1 }`;
// Backtick / Back Quote = ``

function getSaludo(nombre) {
    return 'Hola' + nombre;
}

console.log( `Este es un texto: ${getSaludo( nombre )}` );