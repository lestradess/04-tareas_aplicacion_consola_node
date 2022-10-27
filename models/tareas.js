//import Tarea from ".tarea.js";
import Tarea from "./tarea.js";
//Notas  La clase Tareas retorna un array de tareas
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
    //Notas  El método cargarTareasFromArray carga las tareas en _listado
    cargarTareasFromArray ( tareas = []) {
        let i = 0;
        this._listado = tareas;

    }
    //Notas  Método añade una tarea al listado
    crearTarea (desc = "") {
        const tarea = new Tarea(desc);
        this._listado[ tarea.id ] = tarea;
    }
}


//module.exports = Tareas;
export default Tareas;