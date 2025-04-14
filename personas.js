const prompt = require("prompt-sync")({ sigint: true });

// Lista principal donde se guardarán las personas
const personas = [];

// Función para ingresar una nueva persona
function ingresarPersona() {
  const nombre = prompt("Ingresa el nombre: ");
  const apellido = prompt("Ingresa el apellido: ");
  const dni = prompt("Ingresa el DNI: ");
  const telefonos = prompt("Ingresa los teléfonos separados por comas: ")
    .split(",")
    .map((t) => t.trim())
    .filter((t) => t !== "");

  const hijos = prompt("Ingresa los nombres de los hijos separados por comas: ")
    .split(",")
    .map((h) => h.trim())
    .filter((h) => h !== "");

  const persona = {
    nombre,
    apellido,
    dni,
    telefonos,
    hijos,
  };

  personas.push(persona);
  console.log("Datos de la persona cargados con éxito.\n");
}

// Función para mostrar todos los datos
function mostrarTodos() {
  console.log("\n--- Lista completa ---\n");
  console.log(JSON.stringify(personas, null, 2));

  console.log("\n--- Datos detallados ---");
  personas.forEach((p) => {
    console.log(
      `${p.nombre} ${p.apellido}, DNI: ${p.dni}, Teléfonos: ${p.telefonos.length} teléfono(s), Hijos: ${p.hijos.length}`
    );
  });
  console.log();
}

// Función para buscar por DNI
function filtrarPorDni() {
  const dniBuscado = prompt("Ingresa el DNI para filtrar: ");
  const persona = personas.find((p) => p.dni === dniBuscado);

  if (persona) {
    console.log(`\nDatos de ${persona.nombre} ${persona.apellido}:`);
    console.log(
      `DNI: ${persona.dni}, Teléfonos: ${persona.telefonos.length} teléfono(s), Hijos: ${persona.hijos.length}\n`
    );
  } else {
    console.log("\nNo se encontró una persona con ese N° de DNI.\n");
  }
}

// Función principal con el menú
function menu() {
  while (true) {
    console.log("\n--- Menú ---\n");
    console.log("1. Ingresar nueva persona");
    console.log("2. Mostrar todos los datos");
    console.log("3. Filtrar por DNI");
    console.log("4. Salir");

    const opcion = prompt("Elige una opción: ");

    switch (opcion) {
      case "1":
        ingresarPersona();
        break;
      case "2":
        mostrarTodos();
        break;
      case "3":
        filtrarPorDni();
        break;
      case "4":
        console.log("Adiós...");
        return;
      default:
        console.log("Opción inválida. Intenta de nuevo.\n");
    }
  }
}

// Ejecutamos el menú
menu();
