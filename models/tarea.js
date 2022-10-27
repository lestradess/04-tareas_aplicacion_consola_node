//NOTE Se importa uuidv4 para añadir una id única
import { v4 as uuidv4 } from 'uuid';

//NOTE La clase tarea es inicializada con su constructor
class Tarea {
    id= "";
    desc = "";
    completadoEn = null;

    constructor(desc) {
        this.id = uuidv4();
        this.desc = desc;
        
    }
}

export default Tarea;
