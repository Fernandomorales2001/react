// Variables y  Constantes 
// Var no se debe de usar...

// Variables no cambiantes y no se pueden renombrar 
const nombre = 'Fernando'; 
const apellido = 'Morales';

let valorDado = 5;
valorDado = 4;

console.log(nombre, apellido, valorDado)

// Variables en un scope en particular
if (true){
    const nombre = 'Peter';
    let valorDado = 6;

    console.log(valorDado, nombre)
}

// Ctrl + Space = Autocompletado
console.log(valorDado);

