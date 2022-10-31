import Tarea from "./tarea.js";
import colors from "colors";

//Notas  La clase Tareas retorna un array de tareas

class Tareas {
    _listado = {};
    get listarArr () {
        const listado = [];
        Object.keys(this._listado).forEach(key => {
            const tarea = this._listado[ key ];
            listado.push(tarea);
        })
        return listado;
    }

    constructor () {
        this._listado = {};
    }

    //Notas  El método cargarTareasFromArray carga las tareas en _listado
    cargarTareasFromArray (tareas = []) {
        let i = 0;
        this._listado = tareas;

    }

    //Notas  Método añade una tarea al listado
    crearTarea (desc = "") {
        const tarea = new Tarea(desc);
        this._listado[ tarea.id ] = tarea;
    }
    //Notas  Método para borrar una tarea
    borrarTarea(id=''){

        if (this._listado[ id ]){
            delete this._listado[ id ];
        }

    }

    //Notas Métofo que imprime en pantalla el listado con el estado
    //      de su tarea.
    listadoCompleto () {
        let contador = 0;
        this.listarArr.forEach(tarea => {
            contador += 1;
            const { desc, completadoEn } = tarea;
            const comple = () => {
                if (!completadoEn) {
                    return colors.red("Pendiente")
                }else{
                    return colors.green("Completado");
                }
            }
            console.log(`${ colors.green(contador)}. ${desc} :: ${comple()} `)
            
        });

    }
    listarPendientesCompetadas( completadas = true) {
        let contador = 0;
        this.listarArr.forEach(tarea => {
            
            const { desc, completadoEn } = tarea;
            if ( completadas && completadoEn) {
                contador += 1;
                console.log(`${ colors.green(contador) }. ${ desc } :: ${completadoEn.green}`);
            }
            if (!completadas && !completadoEn){
                contador += 1;
                console.log(`${ colors.red(contador) }. ${ desc }:: ${ 'Pendiente'.red}`);
            }   
            
        });
    }
    toggleCompletadas(ids = []){
        ids.forEach(id => {
            const tarea = this._listado[id];
            if(!tarea.completadoEn){
                tarea.completadoEn = new Date().toISOString();
            }
        });
        this.listarArr.forEach(tarea=> {
            if(!ids.includes(tarea.id)){
                this._listado[tarea.id].completadoEn = null;
            }
        })
    }
}



//module.exports = Tareas;
export default Tareas;