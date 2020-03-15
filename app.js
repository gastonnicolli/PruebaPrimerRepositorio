// 1. Puesta en común de los tipos de datos que vamos a necesitar
// para guardar nuestras tareas

// 2. Se arma un array 

// 3. Se hace evidente que los datos tienen que estar afuera
// Creamos un archivo JSON

// console.log(tareasJson)
// console.log(typeof tareasJson)

// Salto de Fé
// Módulos nativos
// const fs = require('fs');
// let tareasJson = fs.readFileSync('tareas.json', 'utf-8');
// let tareas = JSON.parse(tareasJson);

// Micro desafío 1
// transformar el código anterior en una función
// function leerJson() {
//    return JSON.parse(fs.readFileSync('tareas.json', 'utf-8'));;
// }

// 4. Se lleva el código a un modulo

let archivoTareas = require('./tareas');

let accion = process.argv[2];
let param3 = process.argv[3];
let param4 = process.argv[4];

switch(accion) {
    case 'listar':
        console.log('Listado de tareas');
        let tareas = archivoTareas.leerJSON();
        for (let i = 0;  i < tareas.length; i++) {
            console.log(i + '. ' + tareas[i].titulo + ' - ' + tareas[i].estado);
        }
        console.log()
        break;
    case 'agregar':
        let objTarea = {
            titulo: param3,
            estado: 'pendiente'
        }
        archivoTareas.guardarTarea(objTarea);
        break;
    case 'filtrar':
        let list = archivoTareas.filtrarPorEstado(param3);
        list.forEach((tarea) => {
            console.log(tarea.titulo)
        });
        break;
    case 'eliminar':
        archivoTareas.eliminarTarea(param3);
        break;
    case 'actualizar':
        archivoTareas.actualizarTarea(param3,param4);
        break;
    case undefined:
        console.log('Tenés que pasarme una acción');
        break;

    // Micro desafío 2
    default:
        console.log('No entiendo qué me estás pidiendo');
        console.log('Las acciones disponibles son: listar');
        break;
}
