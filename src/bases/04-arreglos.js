// Arreglos en JS
// Son una coleccion de inforrmacion que se encuentra dentro de una misma variables

//const arreglo = new Array();

const arreglo = new [1,2,3,4];
//arreglo.push(1) No es recomendable usar el push porque modifica el arreglo prinicipal
// Cuando querramos insertar algo, utilizaremos el operador spread

let arreglo2 = [...arreglo, 5];
// arreglo2.push(5);

// Esto es conocido como un callback, es decir una funcion que se ejectutara dentro del metodo
const arreglo3 = arreglo2.map( function(numero) {
   return numero * 2;
});
// Esto crea un nuevo arreglo, por lo cual si se modifica de alguna manera el arreglo3 entonces solo es el arreglo3 el que se cambiara  

console.log(arreglo);
console.log(arreglo2);
//onsole.log(arreglo3);





