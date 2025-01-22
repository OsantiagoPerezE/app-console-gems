# Aplicación de Gestión de Tareas por Consola

Esta es una aplicación de consola interactiva desarrollada en Node.js que permite gestionar una lista de tareas.

## Características

- Crear nuevas tareas
- Listar todas las tareas
- Listar tareas completadas
- Listar tareas pendientes
- Marcar tareas como completadas
- Borrar tareas

## Requisitos Previos

- Node.js instalado en tu sistema
- npm (Node Package Manager)

## Instalación

1. Clona este repositorio:

git
git clone <url-del-repositorio>

2. Navega al directorio del proyecto:

bash
cd <nombre-del-directorio>

3. Instala las dependencias:

bash
npm install

## Uso

Para iniciar la aplicación, ejecuta:

bash
node app.js

### Menú de Opciones

1. Crear tarea
2. Listar tareas
3. Listar tareas completadas
4. Listar tareas pendientes
5. Completar tarea(s)
6. Borrar tarea
7. Salir

## Tecnologías Utilizadas

- Node.js
- Inquirer.js - Para la interfaz de línea de comandos interactiva
- Colors.js - Para dar formato y color al texto en consola

## Estructura del Proyecto

* app.js
* helpers/
    * guardarArchivo.js
    * inquirer.js
* models/
    * tareas.js

## Persistencia de Datos

Las tareas se guardan automáticamente en un archivo local para mantener la persistencia de los datos entre sesiones.

## Contribución

Si deseas contribuir al proyecto, por favor:

1. Haz un Fork del repositorio
2. Crea una rama para tu función (`git checkout -b feature/AmazingFeature`)
3. Realiza tus cambios
4. Haz commit de tus cambios (`git commit -m 'Add some AmazingFeature'`)
5. Push a la rama (`git push origin feature/AmazingFeature`)
6. Abre un Pull Request

## Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE.md](LICENSE.md) para más detalles.
