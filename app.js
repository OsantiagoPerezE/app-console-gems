require("colors");

const { mostrarMenu, pausa } = require("./helpers/mns");

const main = async () => {
  console.clear();
  let opcion = "";
  do {
    opcion = await mostrarMenu();
    console.log(opcion);
    if (opcion === "0") {
      break;
    }
    await pausa();
  } while (opcion !== "0");
};

main();
