// Desestructuracion de Arreglos
// Asignacion Desestructurante

const personajes = ['goku','vegeta','trunks'];

//console.log(personajes[0]);
//console.log(personajes[1]);
//console.log(personajes[2]);

//Mantener el cursor sobre la constante y presionar F2
const [p1] = personajes;
const [, p2] = personajes;
const [, , p3] = personajes;

console.log(p1);

const retornaArreglo = () => {
    return ['ABC', 123];
}

//const arr = retornaArreglo();
const [letras, numeros] = retornaArreglo();
console.log(letras, numeros);

// Tarea 
// 1. El primer valor del arreglo se llamara nombre
// 2. Se llama setNombre
const useState = (valor) => {
    return [valor, ()=>{console.log('Hola Mundo')}];
}

const [nombre, setNombre] = useState('Goku');
console.log(nombre)
setNombre();
// La funcion se podria llamar de la siguiente manera: 
//arr[1]();