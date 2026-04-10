import { defineConfig } from 'astro/config';
import react from '@astrojs/react'; // <-- Esto es lo que falta importar
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Añadimos las integraciones para que Astro reconozca React
  integrations: [react()], 
  vite: {
    plugins: [tailwindcss()]
  }
});
