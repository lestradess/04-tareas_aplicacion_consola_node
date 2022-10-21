require("colors");

const mostrarMenu = async () => {
    console.clear()
    console.log("==================================".green);
    console.log("    Selecione una opción".green);
    console.log("==================================\n".green);

    console.log(`${ "1.".green } Crear tarea`);
    console.log(`${ "2.".green } Listar tareas`);
    console.log(`${ "3.".green } Listar tareas completadas`);
    console.log(`${ "4.".green } Listar tareas pendientes`);
    console.log(`${ "5.".green } Completar tarea`);
    console.log(`${ "6.".green } Borrar tarea`);
    console.log(`${ "0.".green } Salir`);

    //Salida y entrad de datos desde consola
    const readLine = require("readline").createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    readLine.question("Seleccione una opción:", (opt) => {
        readLine.close();
    })
}
const pausa = () => {
    const readLine = require("readline").createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    readLine.question(`\nPresione ${ "Enter".green } para continuar\n`, (opt) => {
        readLine.close();
    })
}


module.exports = {
    mostrarMenu,
    pausa
}