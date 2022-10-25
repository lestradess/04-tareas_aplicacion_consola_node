import colors from 'colors';
import { inquirerMenu, pausa,leerInput } from "./helpers/inquirer.js";
import Tareas from './models/tareas.js';
//import Tareas from "module";

console.clear();

const main = async () => {

    let opt = "";
    const tareas = new Tareas();

    do {
        opt = await inquirerMenu();
        //console.log({ opt });
        switch (opt) {
            case '1':
                //Crear opcion
                const desc = await leerInput('Descripción: ');
                console.log(desc);
                tareas.crearTarea(desc);
            break;
            case "2":
                console.log(tareas._listado);
            break;

        }



        console.log("\n");
        await pausa();
        
    } while (opt !== "0");

   // mostrarMenu();


}
main();