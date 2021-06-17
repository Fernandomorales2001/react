// Desestructuracion de Objetos
// Asignacion Desestructurante

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman',
};

const {nombre, edad, clave} = persona;

console.log(nombre);
console.log(edad);
console.log(clave);

const useContext = ({clave, nombre, edad, rango = 'Capitan'}) => {

   // console.log(nombre, edad, rango)
   // Se retorna este objeto, cuando se llama retornaPersona regresara mi persona.
   return {
       nombreClave: clave,
       años: edad,
       latlng: {
           lat: 4546,
           lng: 4689
       }
   }
}

const {nombreClave, años, latlng:{lat, lng}} = useContext(persona);
console.log(nombreClave, años);
console.log(lat, lng);