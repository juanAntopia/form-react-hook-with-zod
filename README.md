React Hook Form with Zod Validation

Este proyecto es una aplicación de React que implementa un formulario utilizando react-hook-form con validación basada en zod.

Tecnologías utilizadas

React

TypeScript

React Hook Form

Zod

Estructura del Proyecto

/src
 |-- components
 |   |-- CustomInput.tsx  # Componente de input reutilizable
 |   |-- CustomForm.tsx   # Formulario principal con validaciones
 |
 |-- models
 |   |-- form.model.ts    # Definición del esquema de validación con Zod
 |
 |-- App.tsx             # Componente principal
 |-- index.tsx           # Punto de entrada de la aplicación
 |-- styles
 |   |-- App.css
 |   |-- CustomForm.css
 |   |-- CustomInput.css

Instalación

Clona este repositorio e instala las dependencias:

git clone <repo-url>
cd <project-folder>
npm install

Uso

Para iniciar la aplicación en modo desarrollo:

npm run dev

Explicación de Componentes

CustomForm.tsx

Este componente es el formulario principal. Utiliza useForm de react-hook-form con zodResolver para manejar la validación de datos.

CustomInput.tsx

Un componente reutilizable para manejar inputs del formulario, usando Controller de react-hook-form.

form.model.ts

Define la interfaz FormValues y el esquema de validación utilizando zod.

Funcionalidades

Validación en tiempo real con zod

Manejo de errores en los inputs

Envío de datos a la consola tras la validación exitosa

Contribución

Si deseas contribuir, crea un fork del proyecto, realiza tus cambios y abre un pull request.

Licencia

MIT

