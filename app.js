import colors from 'colors';
import {inquirerMenu, pausa} from "./helpers/inquirer.js";
import Tarea from './models/tarea.js';
import Tareas from './models/tareas.js';


console.clear();

const main = async () => {

    console.log("hola mundo");

    let opt = "";

    do {
        // opt = await inquirerMenu();
        // console.log({ opt });
        const tareas = new Tareas();
        const tarea = new Tarea('Comprar comida')
        console.log(tarea);
        console.log(tareas);

        console.log("\n");
        await pausa();
        
    } while (opt !== "0");

   // mostrarMenu();


}
main();