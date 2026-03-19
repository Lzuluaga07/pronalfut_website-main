# Pronalfrut Website

Proyecto web de Pronalfrut.

## Requisitos previos

Antes de ejecutar el proyecto, es necesario verificar que **Node.js** y **npm** estén instalados en el equipo.

## 1. Verificar si Node.js y npm ya están instalados

Abrir **PowerShell** o **Símbolo del sistema (CMD)** y ejecutar:

```
node -v
npm -v
```

### Resultado esperado

Debería aparecer algo similar a:

```
v22.12.0
10.9.0
```

Si ambos comandos funcionan, continuar con la sección de clonado del proyecto.

## 2. Instalar Node.js y npm en Windows si no están instalados

Si alguno de los comandos anteriores falla, instalar Node.js desde su instalador oficial.

### Pasos

1. Descargar el instalador de **Node.js LTS** desde la página oficial.
2. Ejecutar el instalador.
3. Dejar las opciones por defecto activadas.
4. Finalizar la instalación.
5. Cerrar y volver a abrir PowerShell o CMD.
6. Verificar nuevamente:

```
node -v
npm -v
```

## 3. Verificar si Git está instalado

En PowerShell o CMD ejecutar:

```
git --version
```

### Resultado esperado

```
git version 2.x.x.windows.x
```

Si no funciona, instalar Git para Windows y luego volver a abrir la terminal.

## 4. Clonar el repositorio

Ubicarse en la carpeta donde se quiera guardar el proyecto y ejecutar:

```
git clone <URL_DEL_REPOSITORIO>
```

Luego entrar a la carpeta del proyecto:

```
cd pronalfrut-website
```

## 5. Instalar dependencias

Dentro de la carpeta del proyecto ejecutar:

```
npm install
```

Esto descargará e instalará todas las dependencias necesarias.

## 6. Ejecutar el proyecto en modo desarrollo

Ejecutar:

```
npm run dev
```

Luego abrir en el navegador la URL que aparece en consola, normalmente:

```
http://localhost:4321
```

## 7. Comandos útiles

### Ejecutar el proyecto

```
npm run dev
```

### Generar build de producción

```
npm run build
```

### Previsualizar build

```
npm run preview
```

## 8. Solución de problemas

### Error: `node is not recognized`

Node.js no está instalado o no quedó agregado al PATH del sistema. Reinstalar Node.js y volver a abrir la terminal.

### Error: `npm is not recognized`

npm no está disponible en el PATH. Normalmente se corrige reinstalando Node.js.

### Error: `git is not recognized`

Git no está instalado o no quedó agregado al PATH. Instalar Git para Windows.

### El proyecto no levanta después de `npm install`

Probar eliminar `node_modules` y `package-lock.json`, luego volver a instalar:

```
rmdir /s /q node_modules
del package-lock.json
npm install
```

## 9. Versión recomendada de Node.js

Este proyecto requiere **Node.js 22.12.0 o superior**.

Para verificar la versión actual:

```
node -v
```

## 10. Flujo completo resumido

```
node -v
npm -v
git --version
git clone <URL_DEL_REPOSITORIO>
cd pronalfrut-website
npm install
npm run dev
```
