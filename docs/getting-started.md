# Sitio web para costanet

- Sitio oficial de costanet, para los proximos contribuyentes para este proyecto estara esta pequeña Guia de como esta estruturado el proyecto.

## Tools

Importante cumplir con las siguientes tecnologias para no tener errores.

- Nodejs >= 18

## Next.js

`¿Porque usamos nextjs?`, Nextjs se ha convertido en una tecnologia muy importante en el mundo de react. Por facil motivo que nos brinda SSR (server side rendering). Lo cual optimiza los motores de busqueda (SEO). Tambien nos brinda optimizacion de imagenes con su componente `<Image />` y al desplegarlo en `vercel` tiene optimizacion en `PROD`

## Boilerplate

`app` - La carpeta es la carpeta de routing donde cada carpeta que crees dentro de `app` sera una ruta para el navegador

`components` - Ahi estaran todos los componentes reutilizable durante el proyecto

`public`- Todo lo estatico, como `imagenes`, `svg` etc...
