// astro.config.mjs
import { defineConfig } from 'astro/config';
// Exporta la configuración básica

// https://astro.build/config
export default defineConfig({
  // Configuración general del proyecto
  site: 'https://asisjuridica.com',
  // Cambia esto por el URL de tu sitio

  output: 'static',

  // Configura el output directory para los archivos generados
  outDir: './site',
  // Configura el build para optimizar y minificar archivos
  build: {
    minify: true,
    sourcemap: false
  },
  // Configura la integración de plugins y adaptadores

  // Configuración del servidor de desarrollo
  devOptions: {
    port: 3000,
    // Cambia esto si quieres usar un puerto diferente
    hostname: 'localhost',
    // Cambia esto si necesitas usar un hostname diferente
    open: true // Abre el navegador automáticamente al iniciar el servidor
  },
  // Configuración de la optimización de recursos
  optimize: {
    // Aquí puedes ajustar configuraciones específicas de optimización
  },
  // Configuración de la parte de cliente (si estás usando componentes específicos)
  client: {
    // Configura opciones específicas para componentes del lado del cliente aquí
  },
  // Configuración de los assets y archivos estáticos
  assets: {
    // Configura cómo manejar archivos estáticos como imágenes y fuentes
  },
  // Configuración para el manejo de errores y advertencias
  errorHandling: {
    // Configura opciones de manejo de errores aquí
  }
});