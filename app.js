import colors from 'colors';
import { guardarDB, leerDB } from './helpers/guardarArchivo.js';
import { inquirerMenu, pausa,leerInput } from "./helpers/inquirer.js";
import Tareas from './models/tareas.js';
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
        //Borrar pruebas  console.log({ opt });
        switch (opt) {
            case '1':
                const desc = await leerInput('Descripción: ');
                console.log(desc);
                tareas.crearTarea(desc);
            break;
            case "2":
                console.log(tareas._listado);
            break;

        }

        guardarDB(tareas._listado);

        console.log("\n");
        await pausa();
        
    } while (opt !== "0");

   // mostrarMenu();


}
main();
