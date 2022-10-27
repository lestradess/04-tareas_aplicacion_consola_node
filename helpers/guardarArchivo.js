import fs from "fs";
const archivo = './db/data.json';

//Notas Guarda la taea

const guardarDB = (data) => {
    
    fs.writeFileSync(archivo,JSON.stringify(data));
}
//Notas Lee las tareas
const leerDB = () => {
    if (!fs.existsSync(archivo)) {
        return null;
    }
    const info = fs.readFileSync(archivo, {encoding: "utf-8"});
    const data =JSON.parse(info);
    //Borrar pruebas 
    console.log('entró a leer la lista')
    //Borrar pruebas 
    
    return data;

}
export {guardarDB, leerDB};
