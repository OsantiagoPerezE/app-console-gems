require("colors");

const mostrarMenu = () => {
  return new Promise((resolve, reject) => {
    console.clear();
    console.log("===============================".green);
    console.log("     Seleccione una opción      ".green);
    console.log("===============================".green);

    console.log(`${"1 -".green} Crear tarea`);
    console.log(`${"2 -".green} Listar tarea`);
    console.log(`${"3 -".green} Listar tarea completadas`);
    console.log(`${"4 -".green} Listar tarea pendientes`);
    console.log(`${"5 -".green} Completar tarea(s)`);
    console.log(`${"6 -".green} Borrar tarea`);
    console.log(`${"0 -".green} Salir \n`);

    const readLine = require("readline").createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    readLine.question("Seleccione una opción: ", (option) => {
      readLine.close();
      resolve(option);
    });
  });
};

const pausa = () => {
  return new Promise((resolve) => {
    const readLine = require("readline").createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    readLine.question(`\nPresione ${"ENTER".green} para continuar \n`, () => {
      readLine.close();
      resolve();
    });
  });
};

module.exports = {
  mostrarMenu,
  pausa,
};
