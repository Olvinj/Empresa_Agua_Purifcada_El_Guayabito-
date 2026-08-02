# Agua Purificada El Guayabito

Proyecto académico completo desarrollado con:

- React
- React DOM
- React Router DOM
- Handlebars
- LESS
- Vite

## Instalación

```bash
npm install
npm run dev
```

## Compilar

```bash
npm run build
npm run preview
```

## ¿Dónde se usa Handlebars?

El componente `src/components/cards/ProductCards.jsx` compila una plantilla Handlebars para generar el catálogo a partir de `src/data/siteData.js`.

## Antes de entregar

1. Cambia el número de WhatsApp en `src/pages/contacto/Contacto.jsx`.
2. Sustituye los espacios de galería por fotografías reales optimizadas de la empresa.
3. Actualiza precios y horarios reales.
4. Publica el repositorio y GitHub Pages.
5. Prueba ambos enlaces en ventana de incógnito.

## GitHub Pages

El archivo `vite.config.js` usa `base: "./"`, por lo que funciona bien en hosting estático. Para desplegar también puedes usar GitHub Actions o el paquete `gh-pages`.
