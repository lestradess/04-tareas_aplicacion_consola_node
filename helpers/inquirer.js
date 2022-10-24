import inquirer from 'inquirer';
import colors from 'colors';


const preguntas = [
    {
        type: "list",
        name: "opcion",
        message: "¿Qué desea hacer?",
        choices: [
            {
                value: "1",
                name: "1. Crear tarea",
            }, {
                value: "2",
                name: "2. Listar tareas",
            }, {
                value: "3",
                name: "3. Listar tareas completadas",
            }, {
                value: "4",
                name: "4. Crear tareas pendientes",
            }, {
                value: "5",
                name: "5. Completar tarea(s)",
            }, {
                value: "6",
                name: "6. borrar tarea",
            }, {
                value: "0",
                name: "0. Salir",
            } ],
    }
]

const inquirerMenu = async () => {
    console.clear();
    console.log("==================================".green);
    console.log("    Selecione una opción".green);
    console.log("==================================\n".green);

    const { opcion } = await inquirer.prompt(preguntas);

    return opcion;
}
const pausa = async () => {
    const pregunta = [
        {
            type: "input",
            name: "enter",
            message: `Presione ${ "enter".green } para continuar`
        }
    ];
    
    await inquirer.prompt(pregunta);
}

export { inquirerMenu, pausa };