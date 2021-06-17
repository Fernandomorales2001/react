// Funciones en JS

const saludar = function (nombre) {
return `Hola, ${nombre}`;
}

// Funciones de Flecha

const saludar2 =  (nombre) => {
    return `Hola, ${nombre}`;
    }


    const saludar3 =  (nombre) => `Hola, ${nombre}`;
    const saludar4 =  () => `Hola Mundo`;

// console.log(saludar('Fernando'))
console.log(saludar2('Fernando'))
console.log(saludar3('Fernando'))
console.log(saludar4('Fernando'))

const getUser = () => 
     ({
        uid: 'ABC123',
        username: 'Goku'
    })
// Para hacerle saber a JS que ese no es el cuerpo de la funcion, quiere regresar un objeto
// Lo unico que debemos hacer es que todo lo que deseemos regresar entre () significa que estoy regresando el objeto de manera implicita 

const user = getUser();
console.log(user);


// Tarea
// 1. Transforme a una funcion de Flecha
// 2. Tiene que retornar un objeto implicito
// 3. Pruebas
const getUsuarioActivo = (nombre)  =>
     ({
        uid: '654456',
        username: nombre
    })


const usuarioActivo = getUsuarioActivo('Fernando');
console.log(usuarioActivo);


