//import Tarea from ".tarea.js";
import Tarea from "./tarea.js";

class Tareas {
    _listado = {};
    get listarArr(){
        const listado = [];
        Object.keys(this._listado).forEach(key => {
            const tarea = this._listado[key];
            listado.push(tarea);
        })
        return listado;
    }

    constructor(){
        this._listado = {};
    }

    crearTarea (desc = "") {
        const tarea = new Tarea(desc);
        this._listado[ tarea.id ] = tarea;
    }
}


//module.exports = Tareas;
export default Tareas;