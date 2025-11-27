# Lecciones OVA

Aplicación web educativa desarrollada con Angular 21.0 para la gestión y presentación de contenidos de aprendizaje interactivos.

## 📋 Descripción

Este proyecto es un Objeto Virtual de Aprendizaje (OVA) que permite crear y presentar lecciones educativas de manera estructurada, incluyendo:

- **Introducción**: Presentación inicial del tema
- **Objetivos**: Metas de aprendizaje
- **Contenido**: Material educativo principal
- **Actividades**: Ejercicios prácticos con preguntas interactivas

## 🚀 Tecnologías

- **Angular** 21.0.0
- **TypeScript** 5.9.2
- **RxJS** 7.8.0
- **Vitest** 4.0.8 (para pruebas)
- **Angular Router** (navegación)

## 📁 Estructura del Proyecto

```
lecciones-ova/
├── src/
│   ├── app/
│   │   ├── components/          # Componentes reutilizables
│   │   │   ├── lesson/          # Componente de lección
│   │   │   ├── menu/            # Menú de navegación
│   │   │   └── pregunta/        # Componente de preguntas
│   │   ├── features/            # Módulos de características
│   │   │   ├── introduccion/    # Página de introducción
│   │   │   ├── objetivos/       # Página de objetivos
│   │   │   ├── contenido/       # Página de contenido
│   │   │   └── actividad/       # Página de actividades
│   │   ├── models/              # Modelos de datos
│   │   │   └── question.model.ts
│   │   ├── app.config.ts        # Configuración de la aplicación
│   │   ├── app.routes.ts        # Definición de rutas
│   │   └── app.ts               # Componente raíz
│   ├── index.html
│   ├── main.ts
│   └── styles.css
├── public/                      # Recursos estáticos
├── angular.json                 # Configuración de Angular
├── package.json
├── tsconfig.json
└── README.md
```

## 🛠️ Requisitos Previos

Asegúrate de tener instalado:

- **Node.js** (versión 18 o superior)
- **npm** 11.4.1 o superior
- **Angular CLI** 21.0.1

Para instalar Angular CLI globalmente:

```bash
npm install -g @angular/cli@21.0.1
```

## 📦 Instalación

1. **Clona el repositorio**:

```bash
git clone https://github.com/camilokmx/lecciones-ova.git
cd lecciones-ova
```

2. **Instala las dependencias**:

```bash
npm install
```

## 🚀 Ejecución

### Servidor de Desarrollo

Para iniciar el servidor de desarrollo:

```bash
npm start
```

o

```bash
ng serve
```

Abre tu navegador y navega a `http://localhost:4200/`. La aplicación se recargará automáticamente cuando modifiques cualquier archivo fuente.

### Modo Watch (Desarrollo)

Para compilar en modo desarrollo con recarga automática:

```bash
npm run watch
```

## 🏗️ Compilación

Para compilar el proyecto para producción:

```bash
npm run build
```

Los archivos compilados se almacenarán en el directorio `dist/`. La compilación optimiza la aplicación para mejor rendimiento.

### Compilación de Producción

```bash
ng build --configuration production
```

## 🧪 Pruebas

Para ejecutar las pruebas unitarias con Vitest:

```bash
npm test
```

Las pruebas se ejecutarán y mostrarán los resultados en la consola.

## 🎯 Uso de la Aplicación

### Navegación

La aplicación incluye las siguientes rutas:

- `/` - Página principal
- `/introduccion` - Introducción al tema
- `/objetivos` - Objetivos de aprendizaje
- `/contenido` - Contenido educativo
- `/actividad` - Actividades y preguntas

### Componentes Principales

#### Lesson Component
Componente contenedor para cada lección educativa.

#### Menu Component
Menú de navegación entre las diferentes secciones del OVA.

#### Pregunta Component
Maneja la visualización y evaluación de preguntas interactivas.

### Modelo de Preguntas

El archivo `question.model.ts` define la estructura de datos para las preguntas del sistema.

## 🎨 Personalización

### Estilos

- **Global**: Modifica `src/styles.css` para estilos globales
- **Por componente**: Cada componente tiene su archivo `.css` correspondiente

### Contenido

Para agregar nuevo contenido educativo:

1. Crea un nuevo componente en `src/app/features/`
2. Define la ruta en `src/app/app.routes.ts`
3. Actualiza el menú de navegación si es necesario

## 📝 Scripts Disponibles

| Comando | Descripción |
|---------|-------------|
| `npm start` | Inicia el servidor de desarrollo |
| `npm run build` | Compila la aplicación para producción |
| `npm run watch` | Compila en modo desarrollo con watch |
| `npm test` | Ejecuta las pruebas unitarias |
| `ng serve` | Inicia el servidor de desarrollo (directo) |

## 🔧 Configuración

### TypeScript

La configuración de TypeScript se encuentra en:
- `tsconfig.json` - Configuración base
- `tsconfig.app.json` - Configuración para la aplicación
- `tsconfig.spec.json` - Configuración para pruebas

### Angular

La configuración de Angular está en `angular.json`, incluyendo:
- Configuraciones de compilación
- Opciones de servidor de desarrollo
- Configuración de assets y estilos

## 🤝 Contribución

Si deseas contribuir al proyecto:

1. Haz un fork del repositorio
2. Crea una rama para tu característica (`git checkout -b feature/nueva-caracteristica`)
3. Realiza tus cambios y haz commit (`git commit -m 'Añade nueva característica'`)
4. Sube tus cambios (`git push origin feature/nueva-caracteristica`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto es privado y está destinado para uso educativo.

## 👤 Autor

**camilokmx**

## 🐛 Reporte de Problemas

Si encuentras algún problema o bug, por favor abre un issue en el repositorio de GitHub.

## 📚 Recursos Adicionales

- [Documentación de Angular](https://angular.dev)
- [Angular CLI](https://github.com/angular/angular-cli)
- [Guía de Estilo de Angular](https://angular.dev/style-guide)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)

---

Generado con [Angular CLI](https://github.com/angular/angular-cli) versión 21.0.1
