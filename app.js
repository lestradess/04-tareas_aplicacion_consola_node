import colors from 'colors';
import { guardarDB, leerDB } from './helpers/guardarArchivo.js';
import Tareas from './models/tareas.js';
import {
    inquirerMenu,
    pausa, leerInput,
    listadoBorrarTareas,
    confirmar,
    MostrarListadoChecklist
} from "./helpers/inquirer.js";

//import Tareas from "module";

console.clear();

const main = async () => {

    let opt = "";
    const tareas = new Tareas();
    const tareasDB = leerDB();

    if (tareasDB) {
        tareas.cargarTareasFromArray(tareasDB);
    }

    do {
        opt = await inquirerMenu();

        switch (opt) {
            case '1'://Crear tarea
                const desc = await leerInput('Descripción: ');
                console.log(desc);
                tareas.crearTarea(desc);
                break;
            case "2":// Listar tareas
                tareas.listadoCompleto();
                break;
            case "3":// Listar tareas completadas
                tareas.listarPendientesCompetadas();
                break;
            case "4":// Listar tareas pendientes
                tareas.listarPendientesCompetadas(false);
                break;
            case "5"://completar tareas
                const ids = await MostrarListadoChecklist(tareas.listarArr);
                tareas.toggleCompletadas(ids);
                break;
            case "6"://Borrar tarea
                const id = await listadoBorrarTareas(tareas.listarArr);
                if (id === '0') break
                const ok = await confirmar('¿Esta seguro de borrar esta tarea?');
                if (ok) {
                    tareas.borrarTarea(id);
                    console.log('\nTarea borrada correctamente');
                }
                break;
        }

        guardarDB(tareas._listado);

        console.log("\n");
        await pausa();

    } while (opt !== "0");


}
main();
