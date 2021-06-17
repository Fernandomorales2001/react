//import {heroes} from './data/heroes';
import heroes from '../data/heroes'  
// import {heroes} from '../data/heroes'  

//import  heroes, {owners}  from './data/heroes';
//import  {heroes, owners}  from './data/heroes';
//console.log(owners);
//console.log(heroes);
/*
const getHeroeById = (id) => {
    return heroes.find((heroe) => {
        if ( heroe.id === id) {
            return true;
        } else {
            return false;
        }
    });
}
*/



//const getHeroeById = (id) => heroes.find((heroe) => heroe.id === id);
export const getHeroeById = (id) => heroes.find((heroe) => heroe.id === id);

//console.log(getHeroeById(2));

// El find no funciona en este caso porque solo regresa uno 
// Se debe usar algo llamado filter, 
export const getHeroesByOwner = (owner) => heroes.filter((heroe) => heroe.owner === owner);
//const getHeroesByOwner = (owner) => heroes.filter((heroe) => heroe.owner === owner);

//console.log(getHeroesByOwner('DC'));
//console.log(getHeroesByOwner('Marvel'));

//export default getHeroeById;