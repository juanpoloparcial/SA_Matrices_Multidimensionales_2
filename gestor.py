# Lista principal donde se guardarán las personas
personas = []

# Función para ingresar una nueva persona
def ingresar_persona():
    nombre = input("Ingresa el nombre: ")
    apellido = input("Ingresa el apellido: ")
    dni = input("Ingresa el DNI: ")
    telefonos = input("Ingresa los teléfonos separados por comas: ").split(',')
    hijos = input("Ingresa los nombres de los hijos separados por comas: ").split(',')

    # Eliminamos espacios innecesarios
    telefonos = [tel.strip() for tel in telefonos if tel.strip()]
    hijos = [hijo.strip() for hijo in hijos if hijo.strip()]

    persona = [nombre, apellido, dni, telefonos, hijos]
    personas.append(persona)
    print("Datos de la persona cargados con éxito.\n")

# Función para mostrar todos los datos
def mostrar_todos():
    print("\n--- Lista completa ---\n")
    print(personas)
    print("\n--- Datos detallados ---")
    for persona in personas:
        nombre, apellido, dni, telefonos, hijos = persona
        print(f"{nombre} {apellido}, DNI: {dni}, Teléfonos: {len(telefonos)} teléfono(s), Hijos: {len(hijos)}")
    print()

# Función para buscar por DNI
def filtrar_por_dni():
    dni_buscado = input("Ingresa el DNI para filtrar: ")
    encontrado = False
    for persona in personas:
        if persona[2] == dni_buscado:
            nombre, apellido, dni, telefonos, hijos = persona
            print(f"\nDatos de {nombre} {apellido}:")
            print(f"DNI: {dni}, Teléfonos: {len(telefonos)} teléfono(s), Hijos: {len(hijos)}\n")
            encontrado = True
            break
    if not encontrado:
        print("\n No se encontró una persona con ese N° de DNI.\n")

# Función principal con el menú
def menu():
    while True:
        print("\n--- Menú ---\n"
        "1. Ingresar nueva persona\n"
        "2. Mostrar todos los datos\n"
        "3. Filtrar por DNI\n"
        "4. Salir\n")

        opcion = input("Elige una opción: ")

        if opcion == "1":
            ingresar_persona()
        elif opcion == "2":
            mostrar_todos()
        elif opcion == "3":
            filtrar_por_dni()
        elif opcion == "4":
            print("Adiós...")
            break
        else:
            print("Opción inválida. Intenta de nuevo.\n")

# Ejecutamos el menú
menu()
