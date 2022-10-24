import colors from 'colors';
import {inquirerMenu, pausa} from "./helpers/inquirer.js";

console.clear();

const main = async () => {

    console.log("hola mundo");

    let opt = "";

    do {
        opt = await inquirerMenu();
        console.log({ opt });
        console.log("\n");
        await pausa();
        
    } while (opt !== "0");

   // mostrarMenu();


}
main();