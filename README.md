# Cloudinary CloudCreate: Spooky AI Hackathon

![Hackathon Banner](https://res.cloudinary.com/cloudinary-marketing/images/c_fill,w_859/f_auto,q_auto/v1728314770/Web_Assets/blog/hackathon-banner/hackathon-banner-jpg?_i=AA)

## Descripción

Esta aplicación fue creada para la **Cloudinary CloudCreate: Spooky AI Hackathon** con temática de terror para Halloween. La app permite a los usuarios **subir imágenes** y **aplicar filtros de terror** a las mismas, generando efectos espeluznantes con temática de Halloween.

Utiliza la API de **Cloudinary** para el procesamiento de las imágenes en la nube, permitiendo transformar, optimizar y aplicar filtros personalizados a las imágenes subidas.

### Funcionalidades

- **Subir imágenes**: Los usuarios pueden subir imágenes desde su dispositivo.
- **Aplicar filtros de terror**: Filtros temáticos de Halloween aplicados a las imágenes, tales como efectos de sombras, distorsiones y colores oscuros.
- **Vista previa de imagen**: Visualiza la imagen subida con el filtro aplicado en tiempo real.
- **Descarga de imágenes**: Descarga la imagen con los filtros aplicados.

### Tecnologías utilizadas

- **Angular 18**: Framework frontend utilizado para el desarrollo de la aplicación.
  - **Componentes standalone**: Modularidad y flexibilidad en el desarrollo de componentes.
  - **Lazy Loading**: Carga eficiente de las imágenes y recursos.
- **Cloudinary API**: Utilizada para el procesamiento de imágenes en la nube.
  - Transformaciones de imágenes.
  - Aplicación de filtros.
  - Optimización y almacenamiento de las imágenes.
- **CSS3 / TailwindCSS**: Framework de diseño CSS para estilizar y hacer la aplicación responsiva.

## Demo en vivo

Puedes probar la aplicación en el siguiente enlace:

🔗 [Demo en vivo](https://my-scary-photo.netlify.app/)

## Instalación y ejecución local

Sigue estos pasos para clonar y ejecutar la aplicación localmente:

### Requisitos previos

- **Node.js** (Versión 14 o superior)
- **Angular CLI** (Instalado globalmente)
- **Cuenta de Cloudinary** (Para la gestión y transformación de las imágenes)

### Instrucciones

1. Clona el repositorio:

   ```bash
   git clone https://github.com/andreverach/cloudinary-hackathon.git
   cd cloudinary-hackathon
   npm install
   ng serve

2. Crea tus archivos de enviroments y agrega los siguientes datos

   ```bash
   CLOUD_NAME: 'tu-codigo',
   UPLOAD_PRESET: 'tu-codigo',
   PUBLIC_API_KEY: 'tu-codigo',
   SECRET_API_KEY: 'tu-codigo',

